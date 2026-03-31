import { Children, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import AuthProvider, { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedinUserdata, setLoggedinUserdata] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser)
      setUser(userdata.role);
      setLoggedinUserdata(userdata.data)
    }
  }, [])


  const handlelogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
    else if (userData) {
      const employee = userData.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedinUserdata(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee })); ''
      }
    }
    else {
      alert(`invalid Cradentials!!!!!!!!!!! ${email}, ${password}`)
    }

  }


  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ''}
      {user == 'admin' && <AdminDashboard changeuser={setUser} />}
      {user == 'employee' && <EmployeeDashboard changeuser={setUser} data={loggedinUserdata} />}
    </>
  )
}

export default App

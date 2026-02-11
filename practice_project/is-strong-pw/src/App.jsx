import { useState } from 'react'
import validator, { isStrongPassword } from 'validator';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isstrong, setIsstrong] = useState()
  const [Password, setPassword] = useState("")

  const handlechange = (e) => {
    setPassword(e.target.value);
    if (isStrongPassword(e.target.value)) {
      setIsstrong(true);
    } else {
      setIsstrong(false);
    }
  }

  const copytext = async () => {
    await navigator.clipboard.writeText(Password);
    toast.info(`"${Password}" copy successfully!`)
  }

  return (
    <>
      <div className='container'>
        <h1>Checking Password strength in React.js</h1>
        <p className='yellow'>Password should contain atleast one
          <ul className='ul'>
            <li>Lowercase letter</li>
            <li>Uppercase letter</li>
            <li>Number</li>
            <li>Special Symbol</li>
          </ul>
        </p>
        <div className='flex'>
          <input onChange={handlechange} className='password' type="text" placeholder='Enter Password' />
          {isstrong && <span onClick={() => { copytext("hello ji") }} className='pointer'><lord-icon
            src="https://cdn.lordicon.com/iykgtsbt.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ "width": "25px", "height": "25px", "paddingTop": "5px", "paddingLeft": "5px" }}>
          </lord-icon></span>}
        </div>
        {(isstrong) && <p className='true'>This is a strong password</p>}
        {(!isstrong && Password.length > 0) && <p className='error'>This is not a strong password. Make it stronger</p>}
      </div>
      <ToastContainer />
    </>
  )
}

export default App

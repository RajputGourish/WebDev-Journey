import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setdata] = useState()

  useEffect(() => {
    async function fetchData() {
      const r = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      setdata(r);
    }
    fetchData();
  }, [])

  return (
    <>
      <div>This is text inside div</div>
    </>
  )
}

export default App

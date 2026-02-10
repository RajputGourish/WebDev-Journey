import { useState } from 'react';
import './App.css'

function App() {
  const [joke, setJoke] = useState()

  const handleclick = async () => {
    const r = await fetch('https://official-joke-api.appspot.com/random_joke');
    const res = await r.json()
    setJoke(res);
  }


  return (
    <>
      <div className='bg-green-950 min-h-screen text-white flex md:justify-center items-center flex-col gap-6'>
        <div className='flex  gap-2 justify-center items-center'>
          <h1 className='text-2xl md:text-5xl font-bold'>Joke's in Just One Click </h1>
          <img width={50} src="/click.gif" alt="" />
        </div>
        <button onClick={() => handleclick()} className='bg-green-700 rounded-lg hover:bg-green-600 px-10 md:px-16 py-2 font-bold cursor-pointer'>{joke ? "Generate Another Joke" : "Generate Joke"}</button>
        {joke && <div className='text-md md:text-xl text-center flex flex-col gap-2 mx-4'>
          <p>{joke.setup}</p>
          <p>{joke.punchline} 😂😂 </p>
        </div>}
      </div>
    </>
  )
}

export default App

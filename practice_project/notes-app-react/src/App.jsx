import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  const submithandler = (e) => {
    e.preventDefault();
    // console.log(title, detail);
    
    setTitle('');
    setDetail('');

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={e => submithandler(e)} className='flex p-10 flex-col gap-5 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input value={title} onChange={(e) => { setTitle(e.target.value) }} className=' outline-none px-5 py-2  font-medium border-2 border-white rounded-xl ' type="text" placeholder='Enter Notes Heading' />

        <textarea value={detail} onChange={(e) => { setDetail(e.target.value) }} className=' outline-none  font-medium px-5 py-5  border-2 border-white rounded-xl  h-32' type="text" placeholder='Write details here' />
        <button className='outline-none font-medium bg-white  text-black rounded-2xl cursor-pointer px-5 py-2'>Add Note</button>
      </form >
      <div className='lg:w-1/2 p-10 lg:border-l-2 border-l-gray-600 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
          <div className='h-52 w-42 rounded-2xl bg-white'></div>
          <div className='h-52 w-42 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div >
  )
}

export default App

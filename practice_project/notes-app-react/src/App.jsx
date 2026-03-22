import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  const submithandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    setTitle('');
    setDetail('');

    toast.success('Note add successfully.');
    
  }
  const deleteone = (id) => {
    const copyTask = [...task];
    console.log(copyTask);
    copyTask.splice(id, 1);
    setTask(copyTask);
    
    toast.success('Note deleted successfully.');

  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={e => submithandler(e)} className='flex p-10 flex-col gap-5 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>
        <input value={title} onChange={(e) => { setTitle(e.target.value) }} className=' outline-none px-5 py-2  font-medium border-2 border-white rounded-xl ' type="text" placeholder='Enter Notes Heading' />

        <textarea value={detail} onChange={(e) => { setDetail(e.target.value) }} className=' outline-none  font-medium px-5 py-5  border-2 border-white rounded-xl  h-32' type="text" placeholder='Write details here' />
        <button
          className='outline-none font-medium bg-white  text-black rounded-2xl cursor-pointer px-5 py-2 disabled:cursor-not-allowed disabled:bg-gray-500 active:scale-99'
          disabled={title.length < 3 || detail.length < 3}
          >Add Note</button>
      <Toaster />
      </form >
      <div className='lg:w-1/2 p-10 lg:border-l-2 border-l-gray-600 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[95%]'>
          {
          task.length===0 && <h1 className='leading-tight font-bold text-xl text-gray-500'>No recent notes yet!</h1>
          }
          {task.map((e, id) => {
            return <div key={id} className='flex flex-col justify-between relative h-52 w-42 rounded-2xl bg-white text-black px-5 py-3 overflow-auto'>
              <div>
                <h1 className='leading-tight font-bold text-2xl uppercase wrap-break-word'>{e.title}</h1>
                <p className='mt-2 text-gray-800 leading-tight mb-3'>{e.detail}</p>
              </div>
              <button onClick={() => { deleteone(id) }} className='active:scale-95 text-sm font-bold bg-red-600 cursor-pointer text-white py-1 rounded'>Delete</button>
            </div>;
          })}
        </div>
      </div>
    </div >
  )
}

export default App

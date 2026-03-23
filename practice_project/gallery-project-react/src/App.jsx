import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [userdata, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    getdata();
  }, [index])

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`);

    setUserdata(response.data);

  }

  let printuserData = <h3 className='text-gray-300 absolute right-1/2 top-1/2 translate-x-1/2 translate-y-1/2 font-semibold'>Loading...</h3>

  if (userdata.length > 0) {
    printuserData = userdata.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }



  return (
    <div className='bg-black p-4 text-white h-screen overflow-auto'>
      <div className='flex h-[86%] flex-wrap gap-10 justify-center py-4'>
        {printuserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6 text-sm '>
        <button
          disabled={index === 1}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserdata([]);
            }
          }}
          className='bg-amber-500 text-black rounded-xl px-4 py-2 font-semibold cursor-pointer active:scale-95 disabled:bg-gray-500 disabled:scale-100'>
          prev</button>
        <h5 className='font-bold text-lg'>Page {index}</h5>
        <button
          onClick={() => {
            setIndex(index + 1)
            setUserdata([]);

          }}
          className='bg-amber-500 text-black rounded-xl px-4 py-2 font-semibold cursor-pointer active:scale-95'>
          next</button>
      </div>
    </div>
  )
}

export default App

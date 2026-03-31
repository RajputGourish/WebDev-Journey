import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const Alltask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return (

        <div className='bg-[#1c1c1c] p-5 mt-5'>
            <div className='bg-gray-900 mb-2 py-2 px-4 flex justify-between rounded '>
                <h2 className='w-1/5 '>Employee Name</h2>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active</h5>
                <h5 className='w-1/5 '>Completed</h5>
                <h5 className='w-1/5 '>Failed</h5>
            </div>
            <div >
                {userData.map((e, id) => {
                    return <div key={id} className='mb-2 py-2 px-4 flex justify-between rounded cursor-pointer hover:bg-gray-700 '>
                        <h2 className='text-lg  w-1/5 font-semibold'>{e.firstname}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-500'>{e.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{e.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-500'>{e.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-500'>{e.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Alltask

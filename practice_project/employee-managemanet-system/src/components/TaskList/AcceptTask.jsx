import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between items-center py-2'>
                <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold ">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className='flex justify-between mt-4 gap-3'>
                <button className='bg-green-600 py-1 px-2 text-xs w-1/2 rounded cursor-pointer active:scale-95 font-medium'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-2 text-xs w-1/2 rounded cursor-pointer active:scale-95 font-medium'>Mark as Failed</button>
            </div>
        </div>

    )
}

export default AcceptTask

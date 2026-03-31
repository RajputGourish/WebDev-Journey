import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='shrink-0 h-full w-75 bg-cyan-400 rounded-xl p-5'>
            <div className='flex justify-between items-center py-2'>
                <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold ">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className='mt-2'>
                <button className='w-full bg-cyan-600 rounded cursor-pointer px-2 py-1 active:scale-95'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask

import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75 bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center py-2'>
                <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold ">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="mt-7 flex justify-center">
                <button className='py-1 px-2 bg-green-700 active:scale-95'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask

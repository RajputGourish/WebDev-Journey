import React, { useContext } from 'react'
import { ExpenseContext } from '../Context/ExpenseContext'

const History = () => {
    const { transections } = useContext(ExpenseContext);
    const istrue = true;
    return (
        <div className='min-h-40'>
            <h3 className='text-md my-3 font-semibold text-gray-800 border-b border-gray-400 '>History</h3>
            {transections.length === 0 && <h3 className='text-sm text-gray-600'>No transections Available!</h3>}
            {transections.map((elem, idx) => {
                return <div key={idx} className={`bg-white flex items-center text-gray-700 justify-between p-2 shadow-md rounded my-2 border-r-4 font-medium ${(elem.amount>=0) ? `border-green-500` : `border-red-500`}    `}>
                    <p>{elem.text}</p>
                    <p>{elem.amount}</p>
                </div>
            })}



        </div>
    )
}

export default History

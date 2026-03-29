import React, { useContext } from 'react'
import { ExpenseContext } from '../Context/ExpenseContext'

const IncExp = () => {
    const { expence, income } = useContext(ExpenseContext);
    return (
        <div className='bg-white flex w-full justify-center items-center my-3 p-2 shadow-lg rounded'>
            <div className='w-1/2 text-center uppercase'>
                <h5 className='text-gray-900 font-medium text-xs'>Income</h5>
                <h4 className='text-green-500 text-lg font-medium'>₹{income}</h4>
            </div>
            <div className='bg-gray-300 h-10 w-0.5 '></div>
            <div className='w-1/2 text-center uppercase'>
                <h5 className='text-gray-900 font-medium text-xs'>Expense</h5>
                <h4 className='text-red-500 text-lg font-medium'>₹{-1 * expence}</h4>
            </div>
        </div>
    )
}

export default IncExp

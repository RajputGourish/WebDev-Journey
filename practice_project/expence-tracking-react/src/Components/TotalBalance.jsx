import React, { useContext } from 'react'
import { ExpenseContext } from '../Context/ExpenseContext'
const TotalBalance = () => {
    const { transections, balance } = useContext(ExpenseContext)

    return (
        <div>
            <h4 className='uppercase text-xs font-medium leading-2 text-gray-800'>Your Balance</h4>
            <h2 className={`text-3xl font-medium ${(balance < 0) ? 'text-red-600' : 'text-green-600'}`}>₹{balance}</h2>
        </div>
    )
}

export default TotalBalance

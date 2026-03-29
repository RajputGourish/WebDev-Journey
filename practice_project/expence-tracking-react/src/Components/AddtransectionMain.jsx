import React, { useContext } from 'react'
import { ExpenseContext } from '../Context/ExpenseContext'

const AddtransectionMain = () => {
    const { balance,
        setBalance,
        income,
        setIncome,
        expence,
        setExpence,
        addtransection,
        setAddtransection,
        transections,
        setTransections } = useContext(ExpenseContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        
        const am = parseInt(addtransection.amount);
        setTransections([addtransection, ...transections])

        setBalance(balance + am);
        (am > 0) ? setIncome(income + am) : setExpence(expence + am);

        setAddtransection({ text: "", amount: "" });
    }

    const handlechange = (e) => {
        setAddtransection({ ...addtransection, [e.target.id]: e.target.value })
    }



    return (
        <form onSubmit={handlesubmit}>
            <div className='flex flex-col gap-2 text-sm'>
                <p>Text</p>
                <input onChange={handlechange} className='outline-none bg-white px-2 py-1 rounded font-medium' type="text" placeholder='Enter text' id='text' value={addtransection.text} />
                <p>Amount <br /> {`(negative - expense, positive - income)`}</p>
                <input onChange={handlechange} className='outline-none bg-white px-2 py-1 rounded font-medium' type="text" placeholder='Enter amount' id='amount' value={addtransection.amount} />
                <button disabled={addtransection.text.length < 1 || addtransection.amount.length < 1} className='bg-violet-500 py-2 font-semibold rounded text-white cursor-pointer active:scale-95 disabled:bg-purple-300'>Add transection</button>
            </div>
        </form>
    )
}

export default AddtransectionMain

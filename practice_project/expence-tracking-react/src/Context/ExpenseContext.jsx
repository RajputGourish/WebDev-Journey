import { createContext, useState } from 'react'

export const ExpenseContext = createContext()



const ExpenseProvider = ({ children }) => {
    const [balance, setBalance] = useState(0)
    const [income, setIncome] = useState(0)
    const [expence, setExpence] = useState(0)
    const [addtransection, setAddtransection] = useState({ text: "", amount: "" })
    const [transections, setTransections] = useState([])

    return (
        <ExpenseContext.Provider value={{
            balance,
            setBalance,
            income,
            setIncome,
            expence,
            setExpence,
            addtransection,
            setAddtransection,
            transections,
            setTransections
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider

import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemedataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme, settheme] = useContext(ThemedataContext)


    return (
        <div className="flex justify-between items-center px-10 py-4 bg-sky-400 text-white">
            <h2 className='text-xl font-bold'>Gourish Rajput</h2>
            <div className='flex gap-8 text-lg font-bold'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/product">Product</Link>
                <button onclick={() => { settheme('dark') }}>{theme}</button>
            </div>
        </div >
    )
}

export default Navbar

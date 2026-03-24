import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-10 py-4 bg-sky-400 text-white">
            <h2 className='text-xl font-bold'>Gourish Rajput</h2>
            <div className='flex gap-8 text-lg font-bold'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/product">Product</a>
            </div>
        </div>
    )
}

export default Navbar

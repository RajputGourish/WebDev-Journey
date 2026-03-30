import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Rajput 🤝</span>  </h1>
            <button className='bg-red-600 text-lg text-white font-medium cursor-pointer px-5 py-2 rounded-md active:scale-95'>Log Out</button>
        </div>
    )
}

export default Header

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-violet-900 text-white py-2'>
      <div className='logo'>
        <span className='font-bold text-xl'>iTask</span>
      </div>
      <ul className='flex gap-8'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Contact us</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About</li>
      </ul>
    </div>
  )
}

export default Navbar

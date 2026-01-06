import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-14 justify-center'>
                <Link href="/"><li className='cursor-pointer hover:text-red-400'>Home</li></Link>
                <Link href="/about"><li className='cursor-pointer hover:text-red-400'>About</li></Link>
                <Link href="/contact"><li className='cursor-pointer hover:text-red-400'>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar

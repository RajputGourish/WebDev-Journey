"use client"
import React from 'react'
import { usePathname } from 'next/navigation'


const navbar = () => {
  const pathname = usePathname();
  return (
    <div className='bg-slate-700 flex justify-center gap-10'>
      <div>Navbar</div>
      <div> I am at {pathname}</div>
    </div>
  )
}

export default navbar

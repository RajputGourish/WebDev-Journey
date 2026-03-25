import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-7 justify-center py-4 '>
        <Link className='bg-red-500 p-3 text-white font-bold' to='/product/men'>Men's</Link>
        <Link className='bg-red-500 p-3 text-white font-bold' to='/product/women'>Women's</Link>
        <Link className='bg-red-500 p-3 text-white font-bold' to='/product/kids'>Kid's</Link>
      </div>
      <h1>Product Page</h1>
      <Outlet />
    </div>
  )
}

export default Product

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => { navigate('/') }}
                className='px-4 py-2 mr-3 bg-red-400 cursor-pointer active:scale-95 '>Return to Homepage</button>
            <button onClick={() => { navigate(-1) }}
                className='px-4 py-2 bg-red-400 cursor-pointer active:scale-95 '>Back</button>
            <button onClick={() => { navigate(+1) }}
                className='px-4 py-2 ml-4 bg-red-400 cursor-pointer active:scale-95 '>Next</button>
        </div>
    )
}

export default Navbar2

import React, { useState } from 'react'

const Login = ({ handlelogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        e.preventDefault();

        handlelogin(email, password);

        setEmail('');
        setPassword('');

    }


    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => { submithandler(e) }} className='flex gap-4 flex-col items-center justify-center'>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' required className='border-2 font-medium outline-none border-emerald-600 rounded-full px-5 py-3 text-xl bg-transparent text-white ' type="email" placeholder='Enter your email' />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' required className='border-2 font-medium outline-none border-emerald-600 rounded-full px-5 py-3 text-xl bg-transparent text-white ' type="password" placeholder='Enter password' />
                    <button className='w-full border-none font-semibold bg-emerald-600 px-4 py-3 mt-4 rounded-full cursor-pointer active:scale-95'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login

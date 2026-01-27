"use client"
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Generate = () => {
    const [link, setlink] = useState("")
    const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState("")

    // useEffect(() => {
    //     console.log(handle);
    // }, [handle])


    const addlink = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "handle": handle,
            "linktext": text,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json();
        toast(result.message)
    }

    return (
        <div className='min-h-screen bg-[#e9c0e9] grid grid-cols-2 text-gray-900'>
            <div className="col1 form flex flex-col justify-end ml-[5vw] mb-10">

                <ToastContainer />
                <h1 className='font-bold text-4xl '>Create your Bittree</h1>
                <div className='flex flex-col gap-4 my-6 '>

                    <div className="item">
                        <h2 className='font-semibold text-xl' >Step 1: Claim your Handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={(e) => { sethandle(e.target.value) }} className='w-full px-4 py-2 my-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>

                    <div className='item'>

                        <h2 className='font-semibold text-xl' >Step 2: Add links</h2>
                        <div className='mx-4'>
                            <input className='mx-2 my-2  px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link text' />
                            <input className=' mx-2 my-2 px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link' />
                            <button className='py-2 px-4 mx-3 font-bold text-white bg-slate-900 rounded-3xl'>Add link</button>
                        </div>
                    </div>

                    <div className='item'>
                        <h2 className='font-semibold text-xl' >Step 3: Add Picture and Finalise</h2>
                        <div className='mx-4 flex flex-col'>
                            <input className='mx-2 my-2 px-4 py-2 bg-white focus:outline-pink-500 rounded-full' type="text" placeholder='Enter link to your picture' />
                            <button className='w-fit my-3 py-2 px-4 mx-3 font-bold text-white bg-slate-900 rounded-3xl'>Create your BitLink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#e9c0e9]">
                <img className='h-full object-contain' src="/generate.png" alt="generate image" />
            </div>
        </div>
    )
}

export default Generate

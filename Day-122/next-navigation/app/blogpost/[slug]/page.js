"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


const blogpost = () => {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/dashboard');
        }, 2000);
    }, [])


    return (
        <div>
            you visit {params.slug}
            <button type="button" onClick={() => router.push('/dashboard')} className=' bg-red-700 m-10 cursor-pointer'>
                Dashboard
            </button>
        </div>
    )
}

export default blogpost

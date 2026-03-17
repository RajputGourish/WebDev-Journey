import { MoveRight } from 'lucide-react'
import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-6 text-white flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10 rounded-full text-black font-semibold flex justify-center items-center text-2xl'>{props.idx + 1}</h2>
            <div>
                <p className='text-shadow-2xs leading-normal mb-5'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-3 py-2 rounded-full'><MoveRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent

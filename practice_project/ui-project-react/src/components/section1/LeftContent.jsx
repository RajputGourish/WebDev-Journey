import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const LeftContent = () => {
    return (
        <div className='h-full w-1/3 flex flex-col justify-between '>
            <div className='p-6'>
                <h3 className='mb-7 text-5xl font-bold '>Prospective <br /> <span className='text-gray-800'> customer</span> <br /> segmentation</h3>
                <p className='text-lg font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa delectus laborum, quia magni ducimus temporibus quae hic tenetur repudiandae rem.</p>
            </div>
            <div>
                <ArrowUpRight size={80} />
            </div>
        </div>
    )
}

export default LeftContent

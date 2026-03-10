import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = () => {
    return (
        <div className="card h-[330px] w-[280px] rounded-2xl p-[30px] bg-white flex flex-col justify-between">
            <div>
                <div className="top flex justify-between items-center mb-[30px]">

                    <img className='h-[40px] w-[40px] border-[#dadada] border p-[1px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5wT5R7vumVlrrcVIzxKqoqNYtNmpJqwMIQ&s" alt="amazon img" />
                    <button className='flex items-center border border-[#dadada] py-[3px] px-[6px] text-[10px] rounded-[5px] gap-[3px] bg-transparent text-[#b1b1b1]'>Save <Bookmark size={12} /></button>

                </div>
                <div className="center">
                    <h3 className='text-[17px] font-medium'>Amazon <span className='text-[9px] font-medium text-[#8b8b8b]'>5 days ago</span></h3>

                    <h2 className='text-[20px] font-bold'>Senior UI/UX Designer</h2>
                    <div className='tag flex gap-[5px] mt-[10px]'>
                        <h4 className='text-[12px] bg-[#dadada] text-[#111] font-medium px-[4px] py-[8px] rounded-[5px]'>Part Time</h4>
                        <h4 className='text-[12px] bg-[#dadada] text-[#111] font-medium px-[4px] py-[8px] rounded-[5px]'>Senior Level</h4>
                    </div>

                </div>

            </div>
            <div className="bottom flex items-center justify-between border-t-[1px] border-[#d7d7d7ce] pt-[15px]">
                <div>
                    <h3 className='text-[17px]'>$120/hr</h3>
                    <p className='text-[10px] text-[#]'>Mumbai, India</p>
                </div>
                <button className='bg-black text-white px-2 py-1 border-none rounded-[5px] font-bold'>Apply now</button>
            </div>
        </div>
    )
}

export default Card

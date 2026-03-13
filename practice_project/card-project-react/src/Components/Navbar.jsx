import { FaAddressCard } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='text-black backdrop-blur-[10px] font-bold cursor-pointer bg-[#FFFFFFB3] flex justify-between fixed w-[80vw] top-5 py-4 px-20 left-[10vw] rounded-full items-center'>
      <div className="flex justify-center items-center gap-1 text-2xl">
        <span className="text-green-600">&lt;</span>CARDS<FaAddressCard />
        <span className="text-green-600">/&gt;</span></div>
      <div>
        <ul className='flex gap-5'>
            <li className="hover:text-blue-700 hover:underline-offset-8 hover:underline">Home</li>
            <li className="hover:text-blue-700 hover:underline-offset-8 hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

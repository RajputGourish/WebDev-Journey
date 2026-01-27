import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className=" flex flex-col justify-center ml-[5vw] gap-1">
          <p className="text-5xl text-yellow-300 font-bold">Everthing you </p>
          <p className="text-5xl text-yellow-300 font-bold">are, In one,</p>
          <p className="text-5xl text-yellow-300 font-bold">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2 text-black">
            <input className="bg-white px-2 py-2 rounded-lg" type="text" placeholder="linktr.ee/your-url" />
            <button className="bg-pink-300 px-4 py-2 font-semibold rounded-full">Claim your Bittree</button>
          </div>

        </div>
        <div className=" flex justify-center items-end mr-[5vw]">
          <img src="/home.png" alt="homepage image" />
        </div>

      </section >
      <section className="bg-red-700 min-h-screen">

      </section>
    </main >
  );
}

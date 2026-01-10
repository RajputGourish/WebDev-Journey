"use client"
import { submitAction } from "@/actions/form"
import { useRef } from "react";
export default function Home() {
  const ref = useRef();
  return (
    <div className="w-2/3 mx-auto my-12" >
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-white border mx-10" name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input className="text-white border mx-10" name="add" id="add" type="text" />
        </div>
        <div>
          <button className="bg-red-800">Submit</button>
        </div>
      </form>
    </div>
  );
}

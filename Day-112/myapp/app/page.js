// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar";

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hey i am gourish");
  let a  = fs.readFile("data.json");
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
      I am a component
      {/* <button className="border mx-4" onClick={()=>setcount(count+1)}>Click me</button> */}
    </div>
  );
}

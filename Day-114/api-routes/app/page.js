"use client"

export default function Home() {

  const handleclick = async () => {
    let data = {
      name: "Gourish Rajput",
      role: "Coder"
    };
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json();
    console.log("apx ka console",res);
  }


  return (
    <div className="font-bold text-2xl">Next.js Api routes demo

      <button className="border mx-5" onClick={handleclick}>Click me</button>
    </div>
  );
}

import React from 'react'
import User from './Components/User'

const App = () => {
  const arr = [{ user: "rohan" }, 
               { user: "sohan" },
               { user: "mohan" },
               { user: "gourish" },
               { user: "bholu" }];

  arr.forEach((e) => {
    console.log(e);
  })

  return (
    <div className="parent p-[30px] bg-black h-[100vh] flex gap-[30px]">
      {arr.map((e) => {
        return <User name={e.user} />
      })}
    </div>
  )
}

export default App

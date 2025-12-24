import React, { use, useEffect } from 'react'


const Navbar = ({ color }) => {
    // Case 1 Run on every render
    useEffect(() => {
        alert("Hey I will run on every render!!");
    })

    // Case 2 Run only on first render
    useEffect(() => {
        alert("Hey welcome to Gourish Rajput page. Run only on first render!!");
    }, [])

    // Case 3 Run only when certain values changes
    useEffect(() => {
        alert("Hey i am running because color is changed");
    }, [color])

    // Example of cleanup function
    useEffect(() => {
      alert("Hey welcome to Gourish Rajput page. This is the first render of app.jsx!!");
    
      return () => {
        alert("Component was unmounted");
      }
    }, [])
    

    return (
        <div>
            i am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar

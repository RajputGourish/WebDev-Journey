import React from 'react'
import Footer from './Footer'
import Button from './Button'

const navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logotext}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default navbar

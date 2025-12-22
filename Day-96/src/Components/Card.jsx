import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" width={248} style={{border:"2px solid aqua"}} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card

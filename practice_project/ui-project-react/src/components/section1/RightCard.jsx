import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 w-60 rounded-3xl relative overflow-hidden'>
            <img className='h-full object-cover' src={props.img} alt="" />
            <RightCardContent color={props.color} tag = {props.tag} idx={props.idx} intro={props.intro}/>
        </div>
    )
}

export default RightCard

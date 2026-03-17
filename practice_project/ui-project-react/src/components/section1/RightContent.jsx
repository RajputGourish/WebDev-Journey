import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap gap-8 overflow-x-auto rounded-4xl'>
      {props.users.map((e, idx) => {
        return <RightCard key={idx} color={e.color} img={e.img} tag = {e.tag} idx={idx} intro={e.intro}/>
      })}
    </div>
  )
}

export default RightContent

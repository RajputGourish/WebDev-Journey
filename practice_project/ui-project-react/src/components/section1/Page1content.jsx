import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {

  return (
    <div className='pb-16 pt-5 px-10 flex gap-10 items-center h-[88vh]'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1content

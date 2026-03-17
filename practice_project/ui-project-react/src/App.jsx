import React from 'react'
import Section1 from './components/section1/Section1'

const App = () => {
  const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Users who are happy with their current financial services and experience smooth banking with reliable support.',
    tag: 'Satisfied',
    color: 'blue' // green
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Individuals who have access to financial services but feel their needs are not fully met or supported.',
    tag: 'Underserved',
    color: 'lightseagreen' // amber
  },
  {
    img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'People who have limited access to banking services and rely on alternative financial solutions.',
    tag: 'Underbanked',
    color: 'orange' // blue
  },
  {
    img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Users who are overlooked by traditional financial systems and struggle to find suitable services.',
    tag: 'Underwanted',
    color: 'black' // red
  }
]
  return (
    <>
      <Section1 users={users} />
    </>
  )
}

export default App

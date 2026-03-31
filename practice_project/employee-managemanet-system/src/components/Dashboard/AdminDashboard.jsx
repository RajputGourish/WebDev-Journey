import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import Alltask from '../Other/Alltask'

const AdminDashboard = (props) => {
    return (
        <div className='h-full w-full p-10'>
            <Header changeuser={props.changeuser}/>
            <CreateTask />
            <Alltask />
        </div>
    )
}

export default AdminDashboard

import React from 'react'
import Header from '../Other/Header'
import Tasklistno from '../Other/Tasklistno'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

    return (
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header changeuser={props.changeuser} data={props.data} />
            <Tasklistno data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDashboard

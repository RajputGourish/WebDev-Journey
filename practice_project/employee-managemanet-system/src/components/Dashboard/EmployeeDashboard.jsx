import React from 'react'
import Header from '../Other/Header'
import Tasklistno from '../Other/Tasklistno'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header />
            <Tasklistno />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard

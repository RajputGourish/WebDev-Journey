import React, { useContext, useState } from 'react'
import { getLocalStorage } from '../../utils/localstorage'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [tasktitle, setTasktitle] = useState('')
    const [taskdesc, setTaskdesc] = useState('')
    const [taskdate, setTaskdate] = useState('')
    const [assignto, setAssignto] = useState('')
    const [Category, setCategory] = useState('')

    const [newtask, setnewTask] = useState({})

    const handlesubmit = (e) => {
        e.preventDefault()

        setnewTask({ title: tasktitle, description: taskdesc, date: taskdate, category: Category, active: false, newTask: true, failed: false, completed: false })

        const data = userData;  

        data.forEach(element => {
            if (assignto == element.firstname) {
                element.tasks.push(newtask);
                element.taskCounts.newTask = element.taskCounts.newTask + 1;
            }
        });

        setUserData(data);
        console.log(data)

        setTasktitle('');
        setTaskdesc('');
        setTaskdate('');
        setAssignto('');
        setCategory('');
    }



    return (
        <div className='p-5 bg-[#1c1c1c] rounded mt-5'>
            <form onSubmit={(e) => { handlesubmit(e) }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={tasktitle} onChange={(e) => { setTasktitle(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskdate} onChange={(e) => { setTaskdate(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input value={assignto} onChange={(e) => { setAssignto(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='Employe name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={Category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder='design, dev etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskdesc} onChange={(e) => { setTaskdesc(e.target.value) }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full active:scale-95 cursor-pointer' >Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask

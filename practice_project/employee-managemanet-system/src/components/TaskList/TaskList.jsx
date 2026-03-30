
const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
        <div className='shrink-0 h-full w-75 bg-red-500 rounded-xl'>
            <div className='flex justify-between items-center px-5 py-2'>
                <h3 className='text-sm bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4>20 feb 2024</h4>
            </div>

        </div>
    </div>
  )
}

export default TaskList

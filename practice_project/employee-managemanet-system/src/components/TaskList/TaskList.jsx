import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
      {data.tasks.map((e, id) => {
        if (e.newTask) return <NewTask key={id} data={e} />
        if (e.completed) return <CompleteTask key={id} data={e} />
        if (e.active) return <AcceptTask key={id} data={e} />
        if (e.failed) return <FailedTask key={id} data={e} />
      })}

    </div>
  )
}

export default TaskList

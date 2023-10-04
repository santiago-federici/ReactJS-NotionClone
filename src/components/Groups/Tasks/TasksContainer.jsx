import { TaskItem } from './TaskItem'
import './TasksContainer.css'

export function TasksContainer({ tasks, setTaskModal, modal, setModal }) {
  return (
    <ul className="table-content">
      {
        tasks.length
          ? tasks.map(task => (
            <TaskItem
              key={task.id}
              taskName={task.taskName}
              taskStatus={task.taskStatus}
              due={task.due}
              priority={task.priority}
              setTaskModal={setTaskModal}
              modal={modal}
              setModal={setModal}
            />
          ))
          : <span className='no-tasks-yet'>No tasks yet</span>
      }
    </ul>
  )
}

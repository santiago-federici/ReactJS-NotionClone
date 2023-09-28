import { TaskItem } from './TaskItem'
import './TasksContainer.css'

export function TasksContainer({ tasks }) {
  return (
    <ul className="table-content">
      {
        tasks.map(task => (
          <TaskItem key={task.id} taskName={task.taskName} taskStatus={task.taskStatus} due={task.due} priority={task.priority} />
        ))
      }
    </ul>
  )
}

import { TaskItem } from './TaskItem'
import './TasksContainer.css'

export function TasksContainer() {
  return (
    <ul className='tasks-container'>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}

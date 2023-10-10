import { TaskItem } from './TaskItem'
import './TasksContainer.css'

export function TasksContainer({ tasks, handleClickNewTask, groupNameValue, handleClickOpenGroupAside }) {
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
              groupNameValue={groupNameValue}
              handleClickOpenGroupAside={handleClickOpenGroupAside}
            />
          ))
          : <span className='no-tasks-yet' onClick={(e) => handleClickNewTask(e)}>No tasks yet. Click to add a row.</span>
      }
    </ul>
  )
}

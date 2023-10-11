// import { useState } from 'react'
import { TaskItem } from './TaskItem'
import './TasksContainer.css'
import { useAside } from '../../../hooks/useAside'

export function TasksContainer({ tasks, handleClickNewTask, groupNameValue }) {
  const { selectedTaskId, openTaskAside } = useAside()

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
              id={task.id}
              selectedTaskId={selectedTaskId === task.id}
              openTaskAside={openTaskAside}
            />
          ))
          : <span className='no-tasks-yet' onClick={(e) => handleClickNewTask(e)}>No tasks yet. Click to add a row.</span>
      }
    </ul>

  )
}

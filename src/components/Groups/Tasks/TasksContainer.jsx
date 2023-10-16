// import { useState } from 'react'
import { TaskItem } from './TaskItem'
import './TasksContainer.css'
import { useAside } from '../../../hooks/useAside'

export function TasksContainer({ tasks, handleClickNewTask, groupId, groupName }) {
  const { selectedTaskId, openTaskAside } = useAside()

  return (
    <ul className="table-content">
      {
        tasks.length
          ? tasks.map(task => (
            <TaskItem
              key={task.id}
              {...task}
              groupName={groupName}
              selectedTaskId={selectedTaskId === task.id}
              openTaskAside={openTaskAside}
            />
          ))
          : <span className='no-tasks-yet' onClick={(e) => handleClickNewTask(e, groupId)}>No tasks yet. Click to add a row.</span>
      }
    </ul>
  )
}

// import { useState } from 'react'
import { TaskItem } from './TaskItem'
import './TasksContainer.css'
import { useAside } from '../../../hooks/useAside'
import { useGroups } from '../../../hooks/useGroups'

export function TasksContainer({ tasks, groupId, groupName }) {
  const { selectedTaskId, openTaskAside } = useAside()

  const { handleNewTask } = useGroups()

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
              groupId={groupId}
            />
          ))
          : <span className='no-tasks-yet' onClick={(e) => handleNewTask(e, groupId)}>No tasks yet. Click to add a row.</span>
      }
    </ul>
  )
}

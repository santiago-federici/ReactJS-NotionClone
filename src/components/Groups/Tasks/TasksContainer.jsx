// import { useState } from 'react'
import { TaskItem } from './TaskItem'
import './TasksContainer.css'
import { useAside } from '../../../hooks/useAside'

export function TasksContainer({ tasks, setTasks, handleClickNewTask, groupNameValue }) {
  const { selectedTaskId, openTaskAside } = useAside()

  const updateTaskName = (id, newTaskName) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, taskName: newTaskName }
      } else {
        return task
      }
    }))
  }

  return (
    <ul className="table-content">
      {
        tasks.length
          ? tasks.map(task => (
            <TaskItem
              key={task.id}
              {...task}
              groupNameValue={groupNameValue}
              selectedTaskId={selectedTaskId === task.id}
              openTaskAside={openTaskAside}
              updateTaskName={updateTaskName}
            />
          ))
          : <span className='no-tasks-yet' onClick={(e) => handleClickNewTask(e)}>No tasks yet. Click to add a row.</span>
      }
    </ul>

  )
}

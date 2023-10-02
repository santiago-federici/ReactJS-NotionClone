import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { StatusOptions } from './StatusOptions'
import { PriorityOptions } from './PriorityOptions'

export function TaskItem({ taskName, taskStatus, due, priority }) {
  // handling status text, style and options
  const [openTodoOptions, setOpenTodoOptions] = useState(false)
  const [statusInnerText, setStatusInnerText] = useState(taskStatus)
  const [statusClassName, setStatusClassName] = useState(
    statusInnerText === 'To Do'
      ? 'gray-status'
      : statusInnerText === 'Done'
        ? 'green-status'
        : statusInnerText === 'In Progress'
          ? 'blue-status'
          : ''
  )

  // handling priority text, style and options
  const [openProprityOptions, setOpenProprityOptions] = useState(false)
  const [priorityInnerText, setPriorityInnerText] = useState(priority)
  const [priorityClassName, setPriorityClassName] = useState(
    priorityInnerText === 'Low'
      ? 'low-priority'
      : priorityInnerText === 'Medium'
        ? 'medium-priority'
        : priorityInnerText === 'High'
          ? 'high-priority'
          : ''
  )

  const [taskValue, setTaskValue] = useState(taskName)
  const hangleNameChange = (e) => {
    const newTaskValue = e.target.value

    setTaskValue(newTaskValue)
  }

  return (
    <>
      <input className='task-name' value={taskValue} onChange={(e) => hangleNameChange(e)} />
      <p className='status-p' onClick={() => setOpenTodoOptions(!openTodoOptions)}>
        <span className={`status ' + ${statusClassName}`}>
          <GoDotFill />
          {statusInnerText}
        </span>
        {openTodoOptions && <StatusOptions setStatusInnerText={setStatusInnerText} setStatusClassName={setStatusClassName} />}
      </p>
      <p>{due}</p>
      <p className='priority-p' onClick={() => setOpenProprityOptions(!openProprityOptions)}>
        <span className={`priority ' + ${priorityClassName}`}>
          {priorityInnerText}
          {openProprityOptions && <PriorityOptions setPriorityInnerText={setPriorityInnerText} setPriorityClassName={setPriorityClassName} />}
        </span></p>
    </>
  )
}

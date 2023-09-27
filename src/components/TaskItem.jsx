import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { TodoOptions } from './TodoOptions'
import { PriorityOptions } from './PriorityOptions'

export function TaskItem({ taskName, taskStatus, due, priority }) {
  // handling status text, style and options
  const [openTodoOptions, setOpenTodoOptions] = useState(false)
  const [statusInnerText, setStatusInnerText] = useState(taskStatus)
  const [statusClassName, setStatusClassName] = useState('')

  // handling priority text, style and options
  const [openProprityOptions, setOpenProprityOptions] = useState(false)
  const [priorityInnerText, setPriorityInnerText] = useState(priority)
  const [priorityClassName, setPriorityClassName] = useState('')

  return (
    <>
      <p>{taskName}</p>
      <p className='status-p' onClick={() => setOpenTodoOptions(!openTodoOptions)}>
        <span className={`status ' + ${statusClassName}`}>
          <GoDotFill />
          {statusInnerText}
        </span>
        {openTodoOptions && <TodoOptions setStatusInnerText={setStatusInnerText} setStatusClassName={setStatusClassName} />}
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

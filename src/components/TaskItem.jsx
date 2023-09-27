import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { TodoOptions } from './TodoOptions'

export function TaskItem({ taskName, taskStatus, due, priority }) {
  const [openTodoOptions, setOpenTodoOptions] = useState(false)

  // handling status text
  const [statusInnerText, setStatusInnerText] = useState(taskStatus)
  // handling status className
  const [statusClassName, setStatusClassName] = useState('')

  return (
    <>
      <p>{taskName}</p>
      <p className='status-p' onClick={() => setOpenTodoOptions(!openTodoOptions)}>
        <span className={`table-content__status ' + ${statusClassName}`}>
          <GoDotFill />
          {statusInnerText}
        </span>
        {openTodoOptions && <TodoOptions setStatusInnerText={setStatusInnerText} setStatusClassName={setStatusClassName} />}
      </p>
      <p>{due}</p>
      <p>{priority}</p>
    </>
  )
}

import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

function TodoOptions() {
  return (
    <ul className='status-options'>
      <li><span className="table-content__status"><GoDotFill />In Progress</span></li>
      <li><span className="table-content__status"><GoDotFill />Done</span></li>
      <li><span className="table-content__status"><GoDotFill />To Do</span></li>
    </ul>
  )
}

export function TaskItem({ taskName, taskStatus, due, priority }) {
  const [openTodoOptions, setOpenTodoOptions] = useState(false)

  return (
    <>
      <p>{taskName}</p>
      <p className='status-p'><span className="table-content__status" onClick={() => setOpenTodoOptions(!openTodoOptions)}><GoDotFill />{taskStatus}</span>{openTodoOptions && <TodoOptions />}</p>
      <p>{due}</p>
      <p>{priority}</p>
    </>
  )
}

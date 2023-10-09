import { useState } from 'react'
import { StatusOptions } from '../../StatusOptions'
import { PriorityOptions } from '../../PriorityOptions'
import { PointFilled, SidebarRight } from '../../Icons'
import { useAside } from '../../../hooks/useAside'

export function TaskItem({ taskName, taskStatus, due, priority }) {
  const { aside, setAside, setChevronsForTasks } = useAside()

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
      <input className='input-name input-borders' value={taskValue} onChange={(e) => hangleNameChange(e)} />
      <span
        style={{ position: 'absolute', top: '-2rem', right: '0' }}
        onClick={() => {
          setAside(!aside)
          setChevronsForTasks(true)
        }}
      >
        <SidebarRight />
      </span>

      <span className='status-span table-content__item' onClick={() => setOpenTodoOptions(!openTodoOptions)}>
        <span className={`status ' + ${statusClassName}`}>
          <PointFilled />
          {statusInnerText}
        </span>
        {openTodoOptions && <StatusOptions setStatusInnerText={setStatusInnerText} setStatusClassName={setStatusClassName} />}
      </span>

      <p className='table-content__item'>{due}</p>

      <span className='priority-span table-content__item' onClick={() => setOpenProprityOptions(!openProprityOptions)}>
        <span className={`priority ' + ${priorityClassName}`}>
          {priorityInnerText}
          {openProprityOptions && <PriorityOptions setPriorityInnerText={setPriorityInnerText} setPriorityClassName={setPriorityClassName} />}
        </span>
      </span>
    </>
  )
}

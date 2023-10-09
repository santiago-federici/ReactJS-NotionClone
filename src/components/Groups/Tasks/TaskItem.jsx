import { useState } from 'react'
import { StatusOptions } from '../../StatusOptions'
import { PriorityOptions } from '../../PriorityOptions'
import { HorizontalFile, PointFilled, SidebarRight } from '../../Icons'
import { useAside } from '../../../hooks/useAside'
import { TaskAside } from '../../Asides/TaskAside'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export function TaskItem({ taskName, taskStatus, taskDue, taskPriority }) {
  const { taskAside, setTaskAside, setChevronsForTasks, setGroupAside } = useAside()
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)

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
  const [priorityInnerText, setPriorityInnerText] = useState(taskPriority)
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
  const hangleChangeName = (e) => {
    const newTaskValue = e.target.value

    setTaskValue(newTaskValue)
  }

  const handleClickOpenTaskAside = () => {
    setGroupAside(false)
    setChevronsForTasks(true)
    setTaskAside(!taskAside)
  }

  return (
    <>
      <span className='task-name-container'>

        <span className='file-container' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>
          {
            selectedEmoji === null
              ? <HorizontalFile />
              : <>{selectedEmoji}</>
          }

          {
            visibleEmojiPicker
              ? <div className='picker-container'><Picker data={data} onEmojiSelect={(e) => setSelectedEmoji(e.native)} /></div>
              : <></>
          }
        </span>
        <input className='change-name' value={taskValue} onChange={(e) => hangleChangeName(e)} />
        <span className='task-aside-icon' onClick={handleClickOpenTaskAside}>
          <SidebarRight />
          OPEN
        </span>
      </span>

      <span className='status-span table-content__item' onClick={() => setOpenTodoOptions(!openTodoOptions)}>
        <span className={`status ' + ${statusClassName}`}>
          <PointFilled />
          {statusInnerText}
        </span>
        {openTodoOptions && <StatusOptions setStatusInnerText={setStatusInnerText} setStatusClassName={setStatusClassName} />}
      </span>

      <p className='table-content__item'>{taskDue}</p>

      <span className='priority-span table-content__item' onClick={() => setOpenProprityOptions(!openProprityOptions)}>
        <span className={`priority ' + ${priorityClassName}`}>
          {priorityInnerText}
          {openProprityOptions && <PriorityOptions setPriorityInnerText={setPriorityInnerText} setPriorityClassName={setPriorityClassName} />}
        </span>
      </span>

      {
        taskAside
          ? <TaskAside
            taskValue={taskValue}
            statusInnerText={statusInnerText}
            statusClassName={statusClassName}
            taskDue={taskDue}
            priorityInnerText={priorityInnerText}
            priorityClassName={priorityClassName}
            setTaskValue={setTaskValue}
            selectedEmoji={selectedEmoji}
            setSelectedEmoji={setSelectedEmoji} />
          : <></>
      }
    </>
  )
}

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

  // handling status text, styles and options
  const [openStatusOptions, setOpenStatusOptions] = useState(false)
  const [statusInnerText, setStatusInnerText] = useState(taskStatus)
  const [statusClassName, setStatusClassName] = useState(statusInnerText.toLowerCase().split(' ').join('') + '-status')

  // handling priority text, styles and options
  const [openProprityOptions, setOpenProprityOptions] = useState(false)
  const [priorityInnerText, setPriorityInnerText] = useState(taskPriority)
  const [priorityClassName, setPriorityClassName] = useState(priorityInnerText + '-priority')

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

      <span className='status-span table-content__item' onClick={() => setOpenStatusOptions(!openStatusOptions)}>
        <span className={`status ' + ${statusClassName}`}>
          <PointFilled />
          {statusInnerText}
        </span>
        {openStatusOptions &&
          <StatusOptions
            setStatusInnerText={setStatusInnerText}
            setStatusClassName={setStatusClassName} />}
      </span>

      <p className='table-content__item'>{taskDue}</p>

      <span className='priority-span table-content__item' onClick={() => setOpenProprityOptions(!openProprityOptions)}>
        <span className={`priority ' + ${priorityClassName}`}>
          {priorityInnerText}
          {openProprityOptions &&
            <PriorityOptions
              setPriorityInnerText={setPriorityInnerText}
              setPriorityClassName={setPriorityClassName} />}
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

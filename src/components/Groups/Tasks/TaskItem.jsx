import { useState } from 'react'
import { StatusOptions } from '../../StatusOptions'
import { PriorityOptions } from '../../PriorityOptions'
import { HorizontalFile, PointFilled, SidebarRight } from '../../Icons'
import { TaskAside } from '../../Asides/TaskAside'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export function TaskItem({ id, taskName, taskStatus, taskDue, taskPriority, groupNameValue, selectedTaskId, openTaskAside }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState(null)

  // handling status text, styles and options
  const [openStatusOptions, setOpenStatusOptions] = useState(false)
  const [statusInnerText, setStatusInnerText] = useState(taskStatus)
  const [statusClassName, setStatusClassName] = useState(statusInnerText.toLowerCase().split(' ').join('') + '-status')

  // handling priority text, styles and options
  const [openProprityOptions, setOpenProprityOptions] = useState(false)
  const [priorityInnerText, setPriorityInnerText] = useState(taskPriority)
  const [priorityClassName, setPriorityClassName] = useState(priorityInnerText + '-priority')

  const [taskValue, setTaskValue] = useState(taskName)
  const handleChangeTaskName = (e) => {
    const newTaskValue = e.target.value

    setTaskValue(newTaskValue)
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
        <input className='change-name' value={taskValue} onChange={(e) => handleChangeTaskName(e)} />
        <span className='task-aside-icon' onClick={() => {
          openTaskAside(id)
        }}>
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
        selectedTaskId && <TaskAside
          taskValue={taskValue}
          statusInnerText={statusInnerText}
          setStatusInnerText={setStatusInnerText}
          statusClassName={statusClassName}
          setStatusClassName={setStatusClassName}
          taskDue={taskDue}
          priorityInnerText={priorityInnerText}
          setPriorityInnerText={setPriorityInnerText}
          priorityClassName={priorityClassName}
          setPriorityClassName={setPriorityClassName}
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          groupNameValue={groupNameValue}
          handleChangeTaskName={handleChangeTaskName}
        />
      }
    </>
  )
}

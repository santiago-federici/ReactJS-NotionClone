import { useEffect, useState } from 'react'
import { StatusOptions } from '../../StatusOptions'
import { PriorityOptions } from '../../PriorityOptions'
import { HorizontalFile, PointFilled, SidebarRight } from '../../Icons'
import { TaskAside } from '../../Asides/TaskAside'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useGroups } from '../../../hooks/useGroups'

export function TaskItem({ id, taskName, taskStatus, taskDue, taskPriority, groupName, selectedTaskId, openTaskAside, groupId }) {
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

  const { updateTaskName, updateTaskStatus, updateTaskPriority, updateTaskDue } = useGroups()

  const [newTaskName, setNewTaskName] = useState(taskName)

  useEffect(() => {
    updateTaskName(groupId, id, newTaskName)
  }, [newTaskName])

  useEffect(() => {
    updateTaskStatus(groupId, id, statusInnerText)
  }, [statusInnerText])

  useEffect(() => {
    updateTaskPriority(groupId, id, priorityInnerText)
  }, [priorityInnerText])

  const [newTaskDue, setNewTaskDue] = useState(taskDue)

  useEffect(() => {
    updateTaskDue(groupId, id, newTaskDue)
  }, [newTaskDue])

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
        <input className='change-name' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
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

      <input type='date' className='table-content__item date-picker' value={newTaskDue} onChange={(e) => setNewTaskDue(e.target.value)} />

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
          taskId={id}
          groupId={groupId}
          newTaskName={newTaskName}
          setNewTaskName={setNewTaskName}
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
          groupName={groupName}
        />
      }
    </>
  )
}

import { Calendar, Exclamation, HorizontalFile, Photo, PointFilled, Sun, Target } from '../Icons'
import { AsidesHeader } from './AsidesHeader'
import { useState } from 'react'
import { useAside } from '../../hooks/useAside'
import { StatusOptions } from '../StatusOptions'
import { PriorityOptions } from '../PriorityOptions'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import './Asides.css'

export function TaskAside({ newTaskName, setNewTaskName, statusInnerText, setStatusInnerText, statusClassName, setStatusClassName, taskDue, priorityInnerText, setPriorityInnerText, priorityClassName, setPriorityClassName, selectedEmoji, setSelectedEmoji, groupName }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)
  const [openStatusOptions, setOpenStatusOptions] = useState(false)
  const [openProprityOptions, setOpenProprityOptions] = useState(false)

  const { selectedGroupId, openGroupAside } = useAside()

  return (
    <aside className='aside-container'>
      <AsidesHeader />

      <div className='hidden-hover-options'>
        <span><Photo />Add cover</span>
      </div>

      <span className='aside-task-name-container'>
        {
          visibleEmojiPicker
            ? <div className='picker-container'><Picker data={data} onEmojiSelect={(e) => setSelectedEmoji(e.native)} /></div>
            : <></>
        }
        {
          selectedEmoji === null
            ? <span className='empty-emoji' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}><HorizontalFile /></span>
            : <span className='emoji' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>{selectedEmoji}</span>
        }
        <input className='change-name aside-task-name' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
      </span>

      <div className='task-aside-info'>

        <div className='task-aside-info__left'>
          <p><Sun />Status</p>
          <p><Calendar />Due</p>
          <p><Exclamation />Priority</p>
          <p><Target />Project</p>
        </div>

        <div className='task-aside-info__right'>

          <span className='task-aside-status-options right-child' onClick={() => setOpenStatusOptions(!openStatusOptions)}>
            <span className={`status ' + ${statusClassName}`}>
              <PointFilled />
              {statusInnerText}
            </span>
            {
              openStatusOptions &&
              <StatusOptions
                setStatusInnerText={setStatusInnerText}
                setStatusClassName={setStatusClassName} />
            }
          </span>

          <p className='right-child'>{taskDue}</p>

          <span className='task-aside-status-options right-child' onClick={() => setOpenProprityOptions(!openProprityOptions)}>
            <span className={`priority ' + ${priorityClassName}`}>
              {priorityInnerText}
              {openProprityOptions &&
                <PriorityOptions
                  setPriorityInnerText={setPriorityInnerText}
                  setPriorityClassName={setPriorityClassName} />}
            </span>
          </span>

          <p className='right-child' onClick={() => openGroupAside(selectedGroupId)}>{groupName}</p>
        </div>

      </div>

    </aside>
  )
}

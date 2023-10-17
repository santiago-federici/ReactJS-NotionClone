import { AsidesHeader } from './AsidesHeader'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useEffect, useState } from 'react'
import { CircleCheckFilled, Dots, HorizontalFile, Photo, Plus, Search, SmileFilled } from '../Icons'

import './Asides.css'
import { useGroups } from '../../hooks/useGroups'

export function GroupAside({ tasks, groupName, selectedEmoji, setSelectedEmoji, groupId }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)

  const [newGroupName, setNewGroupName] = useState(groupName)

  const { updateGroupName, handleNewTask } = useGroups()

  useEffect(() => {
    updateGroupName(groupId, newGroupName)
  }, [newGroupName])

  return (
    <aside className='aside-container'>
      <AsidesHeader />

      <div className='group-aside-info'>

        <div className='hidden-hover-options'>
          {
            selectedEmoji === null
              ? <span className='add-icon' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}><SmileFilled />Add icon</span>
              : <></>
          }
          <span><Photo />Add cover</span>
        </div>

        <div className='aside-group-name-container'>
          {
            visibleEmojiPicker
              ? <div className='picker-container'><Picker data={data} onEmojiSelect={(e) => setSelectedEmoji(e.native)} /></div>
              : <></>
          }
          {
            selectedEmoji === null
              ? <></>
              : <span className='emoji' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>{selectedEmoji}</span>
          }

          <input className='change-name aside-group-name' value={groupName} onChange={(e) => setNewGroupName(e.target.value)} />
        </div>
      </div>

      <div className='ga-tasks-container'>
        <div className='ga-tasks-container__header'>
          <h3>
            <CircleCheckFilled />
            Tasks
          </h3>
          <div className='header-icons'>
            <span><Search /></span>
            <span onClick={(e) => handleNewTask(e, groupId)}><Plus /></span>
            <span><Dots /></span>
          </div>
        </div>

        <ul className='ga-tasks-list'>
          {
            tasks.map(task => (
              <li key={task.id}>
                <span><HorizontalFile /></span>
                <span>{task.taskName}</span>
                <span>{task.taskStatus}</span>
                <span>{task.taskPriority}</span>
              </li>
            ))
          }
        </ul>

        <span className='ga-tasks-container__btn' onClick={(e) => handleNewTask(e, groupId)}><Plus />New page in Tasks</span>
      </div>

    </aside>
  )
}

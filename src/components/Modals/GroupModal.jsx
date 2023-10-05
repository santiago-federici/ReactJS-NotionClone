import { ModalHeader } from './ModalHeader'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import { Photo, SmileFilled } from '../Icons'

import './Modals.css'

export function GroupModal({ groupNameValue, setGroupNameValue, selectedEmoji, setSelectedEmoji }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)

  const hangleNameChange = (e) => {
    const newGroupNameValue = e.target.value

    setGroupNameValue(newGroupNameValue)
  }

  return (
    <aside className='modal'>
      <ModalHeader />

      <div className='modal-info-container'>
        {
          visibleEmojiPicker
            ? <div className='picker-container'><Picker data={data} onEmojiSelect={(e) => setSelectedEmoji(e.native)} /></div>
            : <></>
        }

        <div className='hidden-emoji-options'>
          {
            selectedEmoji === null
              ? <span className='add-icon' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}><SmileFilled />Add icon</span>
              : <></>
          }
          <span><Photo />Add cover</span>
        </div>

        <div className='group-name-container'>
          {
            selectedEmoji === null
              ? <></>
              : <span className='emoji' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>{selectedEmoji}</span>
          }

          <input className='input-name modal-group-name' value={groupNameValue} onChange={(e) => hangleNameChange(e)} />
        </div>
      </div>

    </aside>
  )
}

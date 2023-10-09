import { AsidesHeader } from './AsidesHeader'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react'
import { Photo, SmileFilled } from '../Icons'

import './Asides.css'

export function GroupAside({ groupNameValue, setGroupNameValue, selectedEmoji, setSelectedEmoji }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)

  const hangleChangeName = (e) => {
    const newGroupNameValue = e.target.value

    setGroupNameValue(newGroupNameValue)
  }

  return (
    <aside className='group-aside'>
      <AsidesHeader />

      <div className='group-aside-info'>
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

        <div className='aside-group-name-container'>
          {
            selectedEmoji === null
              ? <></>
              : <span className='emoji' onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>{selectedEmoji}</span>
          }

          <input className='input-name aside-group-name' value={groupNameValue} onChange={(e) => hangleChangeName(e)} />
        </div>
      </div>

    </aside>
  )
}

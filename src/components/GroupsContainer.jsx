import { BsPlus } from 'react-icons/bs'
import { GroupItem } from './GroupItem'
import { useState } from 'react'
import { nanoid } from 'nanoid'

import './GroupsContainer.css'

export function GroupsContainer() {
  const [groups, setGroups] = useState([<GroupItem key={nanoid()} />])

  return (
    <div className='groups-container'>

      {groups}

      <button
        className='add-group-btn opacity-7'
        onClick={() => setGroups([...groups, <GroupItem key={nanoid()} />])}>
        <BsPlus />
        Add a group
      </button>
    </div>
  )
}

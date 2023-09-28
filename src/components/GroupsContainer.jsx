import { BsPlus } from 'react-icons/bs'
import { GroupItem } from './GroupItem'

import './GroupsContainer.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export function GroupsContainer() {
  const [groups, setGroups] = useState([<GroupItem key={nanoid()} />])

  return (
    <ul className='groups-container'>

      {groups}

      <button
        className='add-group-btn opacity-7'
        onClick={() => setGroups([...groups, <GroupItem key={nanoid()} />])}>
        <BsPlus />
        Add a group
      </button>
    </ul>
  )
}

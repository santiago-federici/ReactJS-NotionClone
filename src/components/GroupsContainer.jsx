import { GroupItem } from './GroupItem'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Plus } from './Icons'

import './GroupsContainer.css'

export function GroupsContainer() {
  const [groups, setGroups] = useState([<GroupItem key={nanoid()} />])

  return (
    <div className='groups-container'>

      {groups}

      <button
        className='add-group-btn low-opacity-text'
        onClick={() => setGroups([...groups, <GroupItem key={nanoid()} />])}>
        <Plus />
        Add a group
      </button>
    </div>
  )
}

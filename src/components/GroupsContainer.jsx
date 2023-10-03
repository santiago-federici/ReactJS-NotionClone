import { GroupItem } from './GroupItem'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Plus } from './Icons'

import './GroupsContainer.css'

export function GroupsContainer() {
  // const [groups, setGroups] = useState([<GroupItem key={nanoid()} />])
  const [groups, setGroups] = useState([])

  const handleNewGroupClick = () => {
    const newGroup = {
      id: nanoid(),
      groupName: 'New Group'
    }

    setGroups([...groups, newGroup])
  }

  return (
    <div className='groups-container'>

      {
        groups.length
          ? groups.map(group => (
            <GroupItem
              key={group.id}
              groupName={group.groupName} />
          ))
          : <p className='no-groups-yet'>No groups yet</p>
      }

      <button
        className='add-group-btn'
        onClick={handleNewGroupClick}
      >
        <Plus />
        Add a group
      </button>
    </div>
  )
}

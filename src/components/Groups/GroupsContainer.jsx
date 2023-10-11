import { GroupItem } from './GroupItem'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Plus } from '../Icons'
import { useAside } from '../../hooks/useAside'

import './GroupsContainer.css'

export function GroupsContainer() {
  const [groups, setGroups] = useState([])
  const { selectedGroupId, openGroupAside } = useAside()

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
              {...group}
              selectedGroupId={selectedGroupId === group.id}
              openGroupAside={openGroupAside} />
          ))
          : <p className='no-groups-yet' onClick={handleNewGroupClick}>No groups yet. Click to add a group.</p>
      }

      <button className='add-group-btn' onClick={handleNewGroupClick}>
        <Plus />
        Add a group
      </button>

    </div>
  )
}

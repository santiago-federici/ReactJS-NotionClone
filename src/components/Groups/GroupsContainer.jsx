import { GroupItem } from './GroupItem'
import { Plus } from '../Icons'
import { useAside } from '../../hooks/useAside'
import { useGroups } from '../../hooks/useGroups'

import './GroupsContainer.css'

export function GroupsContainer() {
  const { selectedGroupId, openGroupAside } = useAside()
  const { groups, handleNewGroup } = useGroups()

  return (
    <div className='groups-container'>

      {
        groups.length
          ? groups.map(group => (
            <GroupItem
              key={group.id}
              {...group}
              tasks={group.tasks}
              selectedGroupId={selectedGroupId === group.id}
              openGroupAside={openGroupAside}
            />
          ))
          : <p className='no-groups-yet' onClick={handleNewGroup}>No groups yet. Click to add a group.</p>
      }

      <button className='add-group-btn' onClick={handleNewGroup}>
        <Plus />
        Add a group
      </button>

      <button onClick={() => console.log(groups)}>Click</button>
    </div>
  )
}

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
      groupName: 'New Group',
      tasks: []
    }

    setGroups([...groups, newGroup])
  }

  const handleClickNewTask = (e, id) => {
    const newTask = {
      id: nanoid(),
      taskName: 'Task',
      taskStatus: 'To Do',
      taskDue: '',
      taskPriority: ''
    }

    // Checks which of the "add task" button is, and specifies the position where the task has to be added at
    if (e.target.innerHTML.includes('New')) {
      setGroups(groups.map(group => {
        if (group.id === id) {
          return {
            ...group,
            tasks: [...group.tasks, newTask]
          }
        } else {
          return group
        }
      }))
    } else {
      setGroups(groups.map(group => {
        if (group.id === id) {
          return {
            ...group,
            tasks: [newTask, ...group.tasks]
          }
        } else {
          return group
        }
      }))
    }
  }

  return (
    <div className='groups-container'>

      {
        groups.length
          ? groups.map(group => (
            <GroupItem
              key={group.id}
              {...group}
              tasks={group.tasks}
              handleClickNewTask={handleClickNewTask}
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

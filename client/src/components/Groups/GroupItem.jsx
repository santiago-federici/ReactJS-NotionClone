import { useState } from 'react'
import { TasksContainer } from './Tasks/TasksContainer'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from '../Icons'
import { GroupAside } from '../Asides/GroupAside'
import { useGroups } from '../../hooks/useGroups'

export function GroupItem({ id, groupName, tasks, selectedGroupId, openGroupAside }) {
  const [arrow, setArrow] = useState(true)
  const [tasksVisible, setTasksVisible] = useState(true)

  const [selectedEmoji, setSelectedEmoji] = useState(null)

  const { handleNewTask, handleDeleteGroup } = useGroups()

  const arrowClassName = arrow ? 'caret' : 'caret-rotate'

  const handleClickTaskVisibility = () => {
    setArrow(!arrow)
    setTasksVisible(!tasksVisible)
  }

  const [dotsOptions, setDotsOptions] = useState(false)

  return (
    <article className='group-container'>
      <div className='group-container__header'>
        <p onClick={handleClickTaskVisibility}>
          <span className={arrowClassName}><CaretDown /></span>
        </p>
        <div className='group-name-container' onClick={() => openGroupAside(id)}>
          <span className='emoji'>{selectedEmoji}</span>
          <p>{groupName}</p>
        </div>

        <p className="dot" onClick={() => setDotsOptions(!dotsOptions)}>
          <Dots />
          {
            dotsOptions &&
            <ul className='floating-options dots-options'>
              <li className='dot-element'>
                <EyeOff />
                Hide
              </li>
              <li className='dot-element' onClick={() => handleDeleteGroup(id)}>
                <Trash />
                Delete
              </li>
            </ul>
          }
        </p>

        <p onClick={(e) => handleNewTask(e, id)}><Plus /></p>
      </div>

      <div className={`${tasksVisible ? '' : 'invisible'}`}>
        <div className='tasks-table-head'>
          <p>Aa Task name</p>
          <p><Sun />Status</p>
          <p><Calendar />Due</p>
          <p><Exclamation />Priority</p>
        </div>

        <TasksContainer tasks={tasks} groupId={id} groupName={groupName} />

        <div className="tasks-table-footer">
          <p onClick={(e) => handleNewTask(e, id)}><Plus />New</p>
        </div>
      </div>

      {
        selectedGroupId &&
        <GroupAside
          groupName={groupName}
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          tasks={tasks}
          groupId={id} />
      }
    </article>
  )
}

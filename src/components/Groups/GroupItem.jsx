import { useState } from 'react'
import { TasksContainer } from './Tasks/TasksContainer'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from '../Icons'
import { GroupAside } from '../Asides/GroupAside'

export function GroupItem({ id, groupName, tasks, handleClickNewTask, selectedGroupId, openGroupAside }) {
  const [arrow, setArrow] = useState(true)
  const [tasksVisible, setTasksVisible] = useState(true)

  const [groupNameValue, setGroupNameValue] = useState(groupName)
  const [selectedEmoji, setSelectedEmoji] = useState(null)

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
          <p>{groupNameValue}</p>
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
              <li className='dot-element'>
                <Trash />
                Delete
              </li>
            </ul>
          }
        </p>

        <p onClick={(e) => handleClickNewTask(e, id)}><Plus /></p>
      </div>

      {
        tasksVisible
          ? <>
            <div className='tasks-table-head'>
              <p>Aa Task name</p>
              <p><Sun />Status</p>
              <p><Calendar />Due</p>
              <p><Exclamation />Priority</p>
            </div>

            <TasksContainer tasks={tasks} handleClickNewTask={handleClickNewTask} groupId={id} groupNameValue={groupNameValue} />

            <div className="tasks-table-footer">
              <p onClick={(e) => handleClickNewTask(e, id)}><Plus />New</p>
            </div>
          </>
          : <></>
      }
      {
        selectedGroupId &&
        <GroupAside
          groupNameValue={groupNameValue}
          setGroupNameValue={setGroupNameValue}
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          tasks={tasks} />
      }
    </article>
  )
}

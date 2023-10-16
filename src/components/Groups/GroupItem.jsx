import { useState } from 'react'
import { TasksContainer } from './Tasks/TasksContainer'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from '../Icons'
import { GroupAside } from '../Asides/GroupAside'

export function GroupItem({ id, groupName, tasks, handleClickNewTask, selectedGroupId, openGroupAside, handleChangeGroupName }) {
  const [arrow, setArrow] = useState(true)
  const [tasksVisible, setTasksVisible] = useState(true)

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

            <TasksContainer tasks={tasks} handleClickNewTask={handleClickNewTask} groupId={id} groupName={groupName} />

            <div className="tasks-table-footer">
              <p onClick={(e) => handleClickNewTask(e, id)}><Plus />New</p>
            </div>
          </>
          : <></>
      }
      {
        selectedGroupId &&
        <GroupAside
          groupName={groupName}
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={setSelectedEmoji}
          tasks={tasks}
          handleChangeGroupName={handleChangeGroupName}
          groupId={id} />
      }
    </article>
  )
}

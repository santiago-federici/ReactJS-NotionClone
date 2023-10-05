import { useState } from 'react'
import { TasksContainer } from './Tasks/TasksContainer'
import { nanoid } from 'nanoid'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from '../Icons'
import { GroupModal } from '../Modals/GroupModal'
import { useModal } from '../../hooks/useModal'

export function GroupItem({ groupName }) {
  const [arrow, setArrow] = useState(true)
  const [tasksDisappear, setTasksDisappear] = useState(false)
  const [tasks, setTasks] = useState([])
  const [groupNameValue, setGroupNameValue] = useState(groupName)
  const [selectedEmoji, setSelectedEmoji] = useState(null)

  const { setChevronsForTasks, modal, setModal } = useModal()

  const handleNewTaskClick = (e) => {
    const newTask = {
      id: nanoid(),
      taskName: 'Task',
      taskStatus: 'To Do',
      due: '',
      priority: ''
    }

    // Checks which of the "add task" button is, and specifies the position where the task has to be added in
    if (e.target.innerHTML.includes('New')) {
      setTasks([...tasks, newTask])
    } else {
      setTasks([newTask, ...tasks])
    }
  }

  const [dotsOptions, setDotsOptions] = useState(false)

  const handleDotsClick = () => {
    setDotsOptions(!dotsOptions)
  }

  return (
    <article className='group-card'>
      <div className='group-card__header'>
        <p onClick={() => {
          setArrow(!arrow)
          setTasksDisappear(!tasksDisappear)
        }}>
          {
            arrow ? <span className='caret'><CaretDown /></span> : <span className='caret-rotate'><CaretDown /></span>
          }
        </p>
        <div className='name-emoji-container' onClick={() => {
          setModal(!modal)
          setChevronsForTasks(false)
        }}>
          <span className='emoji'>{selectedEmoji}</span>
          <p>{groupNameValue}</p>
        </div>
        {
          modal
            ? <GroupModal
              groupNameValue={groupNameValue}
              setGroupNameValue={setGroupNameValue}
              selectedEmoji={selectedEmoji}
              setSelectedEmoji={setSelectedEmoji} />
            : <></>
        }
        <p className="dot" onClick={handleDotsClick}>
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

        <p onClick={(e) => handleNewTaskClick(e)}><Plus /></p>
      </div>

      {
        tasksDisappear
          ? <></>
          : <>
            <div className="table-head">
              <p>Aa Task name</p>
              <p><Sun />Status</p>
              <p><Calendar />Due</p>
              <p><Exclamation />Priority</p>
            </div>

            <TasksContainer tasks={tasks} />

            <div className="table-footer">
              <p onClick={(e) => handleNewTaskClick(e)}><Plus />New</p>
            </div>
          </>
      }
    </article>
  )
}

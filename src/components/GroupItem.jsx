import { BiSolidDownArrow, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsEyeSlash, BsPlus, BsTrash3 } from 'react-icons/bs'
import { CiBrightnessUp } from 'react-icons/ci'
import { RxCalendar } from 'react-icons/rx'
import { FaExclamation } from 'react-icons/fa'
import { useState, useId } from 'react'
import { TasksContainer } from './TasksContainer'
import { nanoid } from 'nanoid'

export function GroupItem() {
  const [arrow, setArrow] = useState('arrow-normal')
  const [tasksDisappear, setTasksDisappear] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: useId(),
      taskName: 'one',
      taskStatus: 'To Do',
      due: '',
      priority: ''
    }
  ])

  const handleNewClick = (e) => {
    const newTask = {
      id: nanoid(),
      taskName: 'two',
      taskStatus: 'To Do',
      due: '',
      priority: ''
    }

    // Checks which of the "add task" button is, and specifies the position where the task has to be added in
    if (e.target.innerHTML.includes('New')) {
      const newTasksArray = [...tasks, newTask]
      setTasks(newTasksArray)
    } else {
      const newTasksArray = [newTask, ...tasks]
      setTasks(newTasksArray)
    }
  }

  // handles the arrow animation
  const handleClickArrow = () => {
    if (arrow === 'arrow-normal') {
      setArrow('arrow-rotate')
      setTasksDisappear('groups-disappear')
      return
    }
    setArrow('arrow-normal')
    setTasksDisappear('')
  }

  const [dotsOptions, setDotsOptions] = useState(false)

  const handleDotsClick = () => {
    setDotsOptions(!dotsOptions)
  }

  return (
    <article className='group-card'>
      <div className='group-card__header'>
        <p onClick={handleClickArrow}>
          <BiSolidDownArrow className={`${arrow}`} />
        </p>
        <p>Books</p>
        <p className="dots" onClick={handleDotsClick}>
          <BiDotsHorizontalRounded />
          {
            dotsOptions &&
            <ul className='floating-options dots-options'>
              <li className='dot-element'>
                <BsEyeSlash />
                Hide
              </li>
              <li className='dot-element'>
                <BsTrash3 />
                Delete
              </li>
            </ul>
          }
        </p>

        <p className="opacity-7" onClick={(e) => handleNewClick(e)}><BsPlus /></p>
      </div>

      <div className={`${tasksDisappear}`}>
        <div className="group-card__table">
          <div className="table-head opacity-7">
            <p>Task name</p>
            <p><CiBrightnessUp />Status</p>
            <p><RxCalendar />Due</p>
            <p><FaExclamation />Priority</p>
          </div>

          <TasksContainer tasks={tasks} />

          <div className="table-footer opacity-7">
            <p onClick={(e) => handleNewClick(e)}><BsPlus />New</p>
          </div>
        </div>
      </div>
    </article>
  )
}

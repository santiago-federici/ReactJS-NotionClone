import { BiSolidDownArrow, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
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
      taskName: 'Read a book one',
      taskStatus: 'To Do',
      due: 'September 10, 2023',
      priority: 'High'
    }
  ])

  const [taskName, setTaskName] = useState('')

  const handleChangeTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const handleClickNew = () => {
    const newTask = {
      id: nanoid(),
      taskName,
      taskStatus: '',
      due: '',
      priority: ''
    }

    const newTasks = [...tasks, newTask]

    setTasks(newTasks)
    setTaskName('')
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

  return (
    <article className='group-card'>
      <div className='group-card__header'>
        <p onClick={handleClickArrow}>
          <BiSolidDownArrow className={`${arrow}`} />
        </p>
        <p>Books</p>
        <p className="opacity-7"><BiDotsHorizontalRounded /></p>
        <p className="opacity-7"><BsPlus /></p>
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

          <input className='new-task-input' onChange={(e) => handleChangeTaskName(e)} value={taskName} placeholder='Write the task name...' />

          <div className="table-footer opacity-7">
            <p onClick={handleClickNew}><BsPlus />New</p>
          </div>
        </div>
      </div>
    </article>
  )
}

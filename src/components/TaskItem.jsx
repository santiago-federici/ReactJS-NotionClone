import { BiSolidDownArrow, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { CiBrightnessUp } from 'react-icons/ci'
import { RxCalendar } from 'react-icons/rx'
import { FaExclamation } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { useState } from 'react'

export function TaskItem() {
  const [arrow, setArrow] = useState('arrow-normal')
  const [tasksDisappear, setTasksDisappear] = useState('')

  const handleClickArrow = () => {
    if (arrow === 'arrow-normal') {
      setArrow('arrow-rotate')
      setTasksDisappear('tasks-disappear')
      return
    }
    setArrow('arrow-normal')
    setTasksDisappear('')
  }

  return (
    <article className='task-card'>
      <div className='task-card__header'>
        <p onClick={handleClickArrow}>
          <BiSolidDownArrow className={`${arrow}`} />
        </p>
        <p>Books</p>
        <p className="opacity-7"><BiDotsHorizontalRounded /></p>
        <p className="opacity-7"><BsPlus /></p>
      </div>

      <div className={`${tasksDisappear}`}>
        <div className="task-card__table">
          <div className="table-head opacity-7">
            <p>Task name</p>
            <p><CiBrightnessUp />Status</p>
            <p><RxCalendar />Due</p>
            <p><FaExclamation />Priority</p>
          </div>

          <div className="table-content">
            <p>Read The Alamanack</p>
            <p className="table-content__status"><GoDotFill />To Do</p>
            <p>September 10, 2023</p>
            <p>High</p>
          </div>

          <div className="table-footer opacity-7">
            <p><BsPlus />New</p>
          </div>
        </div>
      </div>
    </article>
  )
}

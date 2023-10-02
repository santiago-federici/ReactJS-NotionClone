import { useState, useId } from 'react'
import { TasksContainer } from './TasksContainer'
import { nanoid } from 'nanoid'
import { Calendar, CaretDown, CaretRight, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from './Icons'

export function GroupItem() {
  const [arrow, setArrow] = useState(true)
  const [tasksDisappear, setTasksDisappear] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: useId(),
      taskName: '',
      taskStatus: 'To Do',
      due: '',
      priority: ''
    }
  ])

  const handleNewClick = (e) => {
    const newTask = {
      id: nanoid(),
      taskName: 'Task',
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

  const [dotsOptions, setDotsOptions] = useState(false)

  const handleDotsClick = () => {
    setDotsOptions(!dotsOptions)
  }

  return (
    <article>
      <div className='group-card__header'>
        <p onClick={() => {
          setArrow(!arrow)
          setTasksDisappear(!tasksDisappear)
        }}>
          {
            arrow ? <CaretDown /> : <CaretRight />
          }
        </p>
        <p>Books</p>
        <p className="dot low-opacity-text" onClick={handleDotsClick}>
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

        <p className="low-opacity-text" onClick={(e) => handleNewClick(e)}><Plus /></p>
      </div>

      {
        tasksDisappear
          ? <></>
          : <div>
            <div className="table-head low-opacity-text">
              <p>Aa Task name</p>
              <p><Sun />Status</p>
              <p><Calendar />Due</p>
              <p><Exclamation />Priority</p>
            </div>

            <TasksContainer tasks={tasks} />

            <div className="table-footer low-opacity-text">
              <p onClick={(e) => handleNewClick(e)}><Plus />New</p>
            </div>
          </div>
      }
    </article>
  )
}

import { useState } from 'react'
import { TasksContainer } from './TasksContainer'
import { nanoid } from 'nanoid'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from './Icons'

export function GroupItem({ groupName }) {
  const [arrow, setArrow] = useState(true)
  const [tasksDisappear, setTasksDisappear] = useState(false)
  const [tasks, setTasks] = useState([])
  const [groupValue, setGroupValue] = useState(groupName)
  const hangleNameChange = (e) => {
    const newGroupValue = e.target.value

    setGroupValue(newGroupValue)
  }

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
        <input className='task-name no-borders' value={groupValue} onChange={(e) => hangleNameChange(e)} />
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

        <p className="" onClick={(e) => handleNewTaskClick(e)}><Plus /></p>
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

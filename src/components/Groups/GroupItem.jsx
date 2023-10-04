import { useState } from 'react'
import { TasksContainer } from './Tasks/TasksContainer'
import { nanoid } from 'nanoid'
import { Calendar, CaretDown, Dots, Exclamation, EyeOff, Plus, Sun, Trash } from '../Icons'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { GroupModal } from '../Modals/GroupModal'
import { useTaskModal } from '../../hooks/useTaskModal'

export function GroupItem({ groupName }) {
  const [visibleEmojiPicker, setVisibleEmojiPicker] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [arrow, setArrow] = useState(true)
  const [tasksDisappear, setTasksDisappear] = useState(false)
  const [tasks, setTasks] = useState([])
  const [modal, setModal] = useState(false)
  const { taskModal, setTaskModal } = useTaskModal()

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
        <span style={{ position: 'absolute', top: '0' }} onClick={() => setVisibleEmojiPicker(!visibleEmojiPicker)}>click to show emojis</span>
        <div className='name-emoji-container' onClick={() => {
          setModal(!modal)
          setTaskModal(false)
        }}>
          <span className='emoji'>{selectedEmoji}</span>
          <p>{groupName}</p>
          {
            visibleEmojiPicker
              ? <div className='picker-container'><Picker data={data} onEmojiSelect={(e) => setSelectedEmoji(e.native)} /></div>
              : <></>

          }
        </div>
        {
          modal
            ? <GroupModal taskModal={taskModal} />
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

            <TasksContainer
              tasks={tasks}
              setTaskModal={setTaskModal}
              modal={modal}
              setModal={setModal} />

            <div className="table-footer">
              <p onClick={(e) => handleNewTaskClick(e)}><Plus />New</p>
            </div>
          </>
      }
    </article>
  )
}

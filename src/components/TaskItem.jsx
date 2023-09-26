import { GoDotFill } from 'react-icons/go'

export function TaskItem({ taskName, taskStatus, due, priority }) {
  return (
    <>
      <p>{taskName}</p>
      <p><span className="table-content__status"><GoDotFill />{taskStatus}</span></p>
      <p>{due}</p>
      <p>{priority}</p>
    </>
  )
}

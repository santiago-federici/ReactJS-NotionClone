import { GoDotFill } from 'react-icons/go'

export function TodoOptions({ setStatusInnerText, setStatusClassName }) {
  return (
    <ul className='status-options'>
      <li onClick={() => { setStatusInnerText('In Progress'); setStatusClassName('blue-status') }}><span className="table-content__status blue-status"><GoDotFill />In Progress</span></li>
      <li onClick={() => { setStatusInnerText('Done'); setStatusClassName('green-status') }}><span className="table-content__status green-status"><GoDotFill />Done</span></li>
      <li onClick={() => { setStatusInnerText('To Do'); setStatusClassName('') }}><span className="table-content__status"><GoDotFill />To Do</span></li>
    </ul>
  )
}

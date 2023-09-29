import { GoDotFill } from 'react-icons/go'

export function StatusOptions({ setStatusInnerText, setStatusClassName }) {
  return (
    <ul className='floating-options status-options'>
      <li
        onClick={() => {
          setStatusInnerText('In Progress')
          setStatusClassName('blue-status')
        }}>
        <span className="status blue-status">
          <GoDotFill />
          In Progress
        </span>
      </li>

      <li
        onClick={() => {
          setStatusInnerText('Done')
          setStatusClassName('green-status')
        }}>
        <span className="status green-status">
          <GoDotFill />
          Done
        </span>
      </li>

      <li
        onClick={() => {
          setStatusInnerText('To Do')
          setStatusClassName('gray-status')
        }}>
        <span className="status gray-status">
          <GoDotFill />
          To Do
        </span>
      </li>
    </ul>
  )
}

import { GoDotFill } from 'react-icons/go'

export function StatusOptions({ setStatusInnerText, setStatusClassName }) {
  const hangleClickInnerText = (e) => {
    const innerText = e.target.textContent
    setStatusInnerText(innerText)
    setStatusClassName(innerText.toLowerCase().split(' ').join('') + '-status')
  }

  return (
    <ul className='floating-options status-options'>
      <li onClick={(e) => hangleClickInnerText(e)}>
        <span className="status inprogress-status">
          <GoDotFill />
          In Progress
        </span>
      </li>

      <li onClick={(e) => hangleClickInnerText(e)}>
        <span className="status done-status">
          <GoDotFill />
          Done
        </span>
      </li>

      <li onClick={(e) => hangleClickInnerText(e)}>
        <span className="status todo-status">
          <GoDotFill />
          To Do
        </span>
      </li>
    </ul>
  )
}

export function PriorityOptions({ setPriorityInnerText, setPriorityClassName }) {
  const hangleClickInnerText = (e) => {
    const innerText = e.target.innerHTML
    setPriorityInnerText(innerText)
    setPriorityClassName(innerText.toLowerCase() + '-priority')
  }

  return (

    <ul className="floating-options priority-options">
      <li className="priority high-priority" onClick={(e) => hangleClickInnerText(e)}>
        High
      </li>

      <li className="priority medium-priority" onClick={(e) => hangleClickInnerText(e)}>
        Medium
      </li>

      <li className="priority low-priority" onClick={(e) => hangleClickInnerText(e)}>
        Low
      </li>
    </ul>

  )
}

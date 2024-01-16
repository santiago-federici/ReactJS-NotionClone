export function PriorityOptions({ setPriorityInnerText, setPriorityClassName }) {
  const handleClickInnerText = (e) => {
    const innerText = e.target.innerHTML
    setPriorityInnerText(innerText)
    setPriorityClassName(innerText.toLowerCase() + '-priority')
  }

  return (

    <ul className="floating-options priority-options">
      <li className="priority high-priority" onClick={(e) => handleClickInnerText(e)}>
        High
      </li>

      <li className="priority medium-priority" onClick={(e) => handleClickInnerText(e)}>
        Medium
      </li>

      <li className="priority low-priority" onClick={(e) => handleClickInnerText(e)}>
        Low
      </li>
    </ul>

  )
}

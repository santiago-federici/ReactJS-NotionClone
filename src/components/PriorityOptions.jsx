export function PriorityOptions({ setPriorityInnerText, setPriorityClassName }) {
  // TODO: make the priority start with a default className, so it has the corresponding background and font color
  // ==================================================================================================================
  // ==================================================================================================================
  // ==================================================================================================================
  // ==================================================================================================================

  return (
    <ul className="priority-options">
      <li className="priority high-priority"
        onClick={() => {
          setPriorityInnerText('High')
          setPriorityClassName('high-priority')
        }}>
        High
      </li>
      <li className="priority medium-priority"
        onClick={() => {
          setPriorityInnerText('Medium')
          setPriorityClassName('medium-priority')
        }}>
        Medium
      </li>
      <li className="priority low-priority"
        onClick={() => {
          setPriorityInnerText('Low')
          setPriorityClassName('low-priority')
        }}>
        Low
      </li>
    </ul>
  )
}

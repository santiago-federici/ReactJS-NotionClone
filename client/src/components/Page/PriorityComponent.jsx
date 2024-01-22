import { useState } from 'react'

export function PriorityComponent ({ rows, row, index, getUpdatedPriority }) {
  const [openPriorityList, setOpenPriorityList] = useState(new Array(rows.length).fill(false))

  const handlePriorityOptions = (index) => {
    const newOpenPriorityList = [...openPriorityList]
    newOpenPriorityList[index] = !newOpenPriorityList[index]
    setOpenPriorityList(newOpenPriorityList)
  }

  const handleClickPriority = (e, rowId) => {
    const newPriority = e.target.innerText
    if (newPriority === 'Low' || newPriority === 'Medium' || newPriority === 'High') {
      getUpdatedPriority(rowId, newPriority)
    }
  }

  return (
    <td onClick={() => handlePriorityOptions(index)}>
      <span className={`priority priority-${row.priority.toLowerCase().split(' ').join('')}`}>
        {row.priority}
      </span>
      {
        openPriorityList[index] && (
          <div className='priority-options'>
            <p>Select an option</p>
            <ul onClick={(e) => handleClickPriority(e, row.id)}>
              <li className='priority priority-low'>Low</li>
              <li className='priority priority-medium'>Medium</li>
              <li className='priority priority-high'>High</li>
            </ul>
          </div>
        )
      }
    </td>
  )
}

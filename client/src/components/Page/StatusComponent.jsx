import { useState } from 'react'
// import { useRows } from '../../hooks/useRows'

export function StatusComponent ({ rows, row, index, getUpdatedStatus }) {
  // const { getUpdatedStatus } = useRows()
  const [openStatusList, setOpenStatusList] = useState(new Array(rows.length).fill(false))

  const handleStatusOptions = (index) => {
    const newOpenStatusList = [...openStatusList]
    newOpenStatusList[index] = !newOpenStatusList[index]
    setOpenStatusList(newOpenStatusList)
  }

  const handleClickStatus = (e, rowId) => {
    const newStatus = e.target.innerText
    if (newStatus === 'To Do' || newStatus === 'In Progress' || newStatus === 'Done') {
      getUpdatedStatus(rowId, newStatus)
    }
  }

  return (
    <td onClick={() => handleStatusOptions(index)}>
      <span className={`status status-${row.status.toLowerCase().split(' ').join('')}`}>
        {row.status}
      </span>
      {
        openStatusList[index] && (
          <div className='status-options'>
            <p>Select an option</p>
            <ul onClick={(e) => handleClickStatus(e, row.id)}>
              <li className='status status-todo'>To Do</li>
              <li className='status status-done'>Done</li>
              <li className='status status-inprogress'>In Progress</li>
            </ul>
          </div>
        )
      }
    </td>
  )
}

import { useState } from 'react'
// import { useRows } from '../../hooks/useRows'

export function StatusComponent ({ rows, status, id, index, getUpdatedStatus }) {
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
    <div onClick={() => handleStatusOptions(index)}>
      <span className={`status status-${status.toLowerCase().split(' ').join('')}`}>
        {status}
      </span>
      {
        openStatusList[index] && (
          <div className='status-options'>
            <p>Select an option</p>
            <ul onClick={(e) => handleClickStatus(e, id)}>
              <li className='status status-todo'>To Do</li>
              <li className='status status-done'>Done</li>
              <li className='status status-inprogress'>In Progress</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}

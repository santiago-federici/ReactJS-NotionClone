import { useEffect, useState } from 'react'
import { useRows } from '../../hooks/useRows'

import { TableHeader } from './TableHeader'
import { Plus } from '../Icons'

export function PageMain ({ tableId, title, setNewTitle, updateTableTitle }) {
  const { rows, getRows, rowsUpdated, setRowsUpdated, addARow, handleChangeLocalMainContent, getUpdatedMainContent, localMainContent } = useRows()

  useEffect(() => {
    getRows(tableId)
  }, [tableId, rowsUpdated])

  const [openStatusList, setOpenStatusList] = useState(new Array(rows.length).fill(false))

  const handleStatusOptions = (index) => {
    const newOpenStatusList = [...openStatusList]
    newOpenStatusList[index] = !newOpenStatusList[index]
    setOpenStatusList(newOpenStatusList)
  }

  const handleClickStatus = (e, rowId) => {
    if (e.target.innerText === 'To Do' || e.target.innerText === 'In Progress' || e.target.innerText === 'Done') {
      fetch(`http://localhost:3000/tables/rows/status/${rowId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: e.target.innerText })
      })
        .then(res => res.json())
        .then(data => setRowsUpdated(!rowsUpdated))
        .catch(err => console.log('err from tables.jsx catch: ', err))
    }
  }

  const [openPriorityList, setOpenPriorityList] = useState(new Array(rows.length).fill(false))

  const handlePriorityOptions = (index) => {
    const newOpenPriorityList = [...openPriorityList]
    newOpenPriorityList[index] = !newOpenPriorityList[index]
    setOpenPriorityList(newOpenPriorityList)
  }

  const handleClickPriority = (e, rowId) => {
    if (e.target.innerText === 'Low' || e.target.innerText === 'Medium' || e.target.innerText === 'High') {
      fetch(`http://localhost:3000/tables/rows/priority/${rowId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ priority: e.target.innerText })
      })
        .then(res => res.json())
        .then(data => setRowsUpdated(!rowsUpdated))
        .catch(err => console.log('err from tables.jsx catch: ', err))
    }
  }

  return (
    <main className='table-view-main'>
      <input
       className='table-title'
       value={title || ''}
       onChange={(e) => setNewTitle(e.target.value)}
       onBlur={() => updateTableTitle(title, tableId)} />

      <TableHeader />

      <article className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Due</th>
              <th><Plus /></th>
            </tr>
          </thead>

          <tbody>
            {
              rows && rows.length > 0 && rows.map((row, index) => (
                <tr key={row.id}>
                  <td className='main-content-td'>
                    <input
                     className='row-main-content'
                     value={localMainContent[row.id] || row.main_content || ''}
                     onChange={(e) => handleChangeLocalMainContent(row.id, e.target.value)}
                     onBlur={() => getUpdatedMainContent(row.id, localMainContent[row.id])} />
                  </td>
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
                  <td>{row.due}</td>
                  <td></td>
                </tr>
              ))
            }
            <tr className='new-row-btn'>
              <td onClick={() => addARow(tableId)}><Plus /> New</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </article>
    </main>
  )
}

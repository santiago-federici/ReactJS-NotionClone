import { useEffect, useState } from 'react'

import { Bolt, ChevronDown, ClockBig, Dots, Plus, Search, Star } from '../Icons'

import './Table.css'

export function Table ({ tableId, setTableId }) {
  const [tableInfo, setTableInfo] = useState([])
  const [rows, setRows] = useState([])
  const [rowsUpdated, setRowsUpdated] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/tables/findTable/${tableId}`)
      .then(res => res.json())
      .then(data => setTableInfo(data))
      .catch(err => console.log('err from table.jsx catch: ', err))
  }, [tableId])

  useEffect(() => {
    fetch(`http://localhost:3000/tables/rows/${tableId}`)
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(err => console.log('err from table.jsx catch: ', err))
  }, [tableId, rowsUpdated])

  const handleNewRow = (tableId) => {
    fetch('http://localhost:3000/tables/rows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tableId })
    })
      .then(res => res.json())
      .then(data => setRowsUpdated(!rowsUpdated))
      .catch(err => console.log('err from table.jsx catch: ', err))
  }

  const [openStatusList, setOpenStatusList] = useState(new Array(rows.length).fill(false))

  const handleStatusOptions = (index) => {
    const newOpenStatusList = [...openStatusList]
    newOpenStatusList[index] = !newOpenStatusList[index]
    setOpenStatusList(newOpenStatusList)
  }

  const [openPriorityList, setOpenPriorityList] = useState(new Array(rows.length).fill(false))

  const handlePriorityOptions = (index) => {
    const newOpenPriorityList = [...openPriorityList]
    newOpenPriorityList[index] = !newOpenPriorityList[index]
    setOpenPriorityList(newOpenPriorityList)
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

  const handleChangeMainContent = (e, rowId) => {
    const newMainContent = e.target.value
    fetch(`http://localhost:3000/tables/rows/mainContent/${rowId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mainContent: newMainContent })
    })
      .then(res => res.json())
      .then(data => setRowsUpdated(!rowsUpdated))
      .catch(err => console.log('err from tables.jsx catch: ', err))
  }

  return (
    tableInfo.length
      ? <body className='table-view-body'>
        <header className='table-view-header'>
          <div className='header-route-container'>
            {tableInfo[0].title}
          </div>
          <div className='header-options-container'>
            <p className='options-edited'>Edited Dec 12, 2023</p>
            <p>Share</p>
            <ClockBig />
            <Star />
            <Dots />
          </div>
        </header>
        <main className='table-view-main'>
          <h1>{tableInfo[0].title}</h1>

          <section className='table-view-section'>
            <div className='header-views'>
              <p>Table</p>
              <Plus />
            </div>

            <div className='header-options-container'>
              <p>Filter</p>
              <p className='sort'>Sort</p>
              <Bolt />
              <Search />
              <Dots />
              <span className='new-btn'>New <ChevronDown /></span>
            </div>
          </section>
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
                        <input className='row-main-content' value={row.main_content} onChange={(e) => handleChangeMainContent(e, row.id)} />
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
                  <td onClick={() => handleNewRow(tableId)}><Plus /> New</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </article>
        </main>
      </body>
      : <></>

  )
}

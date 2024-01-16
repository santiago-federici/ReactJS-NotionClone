import { useEffect, useState } from 'react'
import './Table.css'
import { Bolt, ChevronDown, ClockBig, Dots, Plus, Search, Star } from '../Icons'

export function Table ({ tableId, setTableId }) {
  const [tableInfo, setTableInfo] = useState([])
  const [rows, setRows] = useState([])

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
  }, [tableId])

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
                  rows && rows.length > 0 && rows.map(row => (
                    <tr key={row.id}>
                      <td>{row.main_content}</td>
                      <td>{row.status}</td>
                      <td>{row.priority}</td>
                      <td>{row.due}</td>
                      <td></td>
                    </tr>
                  ))
                }
                <tr className='new-row-btn'>
                  <td><Plus /> New</td>
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

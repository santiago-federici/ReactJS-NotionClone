import { useEffect } from 'react'
import { useRows } from '../../hooks/useRows'

import { TableHeader } from './TableHeader'
import { Plus } from '../Icons'
import { StatusComponent } from './StatusComponent'
import { PriorityComponent } from './PriorityComponent'

export function PageMain ({ tableId, title, setNewTitle, updateTableTitle }) {
  const {
    rows, getRows,
    rowsUpdated,
    addARow,
    handleChangeLocalMainContent,
    getUpdatedMainContent,
    localMainContent,
    getUpdatedStatus,
    getUpdatedPriority
  } = useRows()

  useEffect(() => {
    getRows(tableId)
  }, [tableId, rowsUpdated])

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
                  <StatusComponent rows={rows} row={row} index={index} getUpdatedStatus={getUpdatedStatus} />
                  <PriorityComponent rows={rows} row={row} index={index} getUpdatedPriority={getUpdatedPriority} />
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

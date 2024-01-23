import { useEffect, useState } from 'react'
import { useRows } from '../../hooks/useRows'

import { TableHeader } from './TableHeader'
import { OpenSidebar, Plus } from '../Icons'
import { StatusComponent } from './StatusComponent'
import { PriorityComponent } from './PriorityComponent'
import { SidebarComponent } from '../Sidebar/SidebarComponent'

export function PageMain ({ tableId, title, setNewTitle, updateTableTitle }) {
  const {
    rows,
    getRows,
    rowsUpdated,
    addARow,
    localMainContent,
    getUpdatedMainContent,
    handleChangeLocalMainContent,
    localDescription,
    getUpdatedDescription,
    handleChangeLocalDescription,
    getUpdatedStatus,
    getUpdatedPriority,
    getUpdatedDate,
    getDeletedRow
  } = useRows()

  useEffect(() => {
    getRows(tableId)
  }, [tableId, rowsUpdated])

  const [openSidebarRowIndex, setOpenSidebarRowIndex] = useState(null)

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
                     onBlur={() => getUpdatedMainContent(row.id, localMainContent[row.id])}
                    />

                    <span className='open-sidebar' onClick={() => setOpenSidebarRowIndex(index)} >
                      <OpenSidebar />
                      OPEN
                    </span>

                  </td>
                  <td>
                    <StatusComponent rows={rows} status={row.status} id={row.id} index={index} getUpdatedStatus={getUpdatedStatus} />
                  </td>
                  <td>
                    <PriorityComponent rows={rows} priority={row.priority} id={row.id} index={index} getUpdatedPriority={getUpdatedPriority} />
                  </td>
                  <td>
                    <input type='date' value={row.due || ''} onChange={(e) => getUpdatedDate(row.id, e.target.value)} />
                  </td>
                  <td></td>

                  {index === openSidebarRowIndex && (
                      <SidebarComponent
                        rows={rows}
                        mainContent={row.main_content}
                        status={row.status}
                        id={row.id}
                        priority={row.priority}
                        due={row.due}
                        description={row.description}
                        index={index}
                        setOpenSidebarRowIndex={setOpenSidebarRowIndex}
                        localMainContent={localMainContent}
                        getUpdatedMainContent={getUpdatedMainContent}
                        handleChangeLocalMainContent={handleChangeLocalMainContent}
                        localDescription={localDescription}
                        getUpdatedDescription={getUpdatedDescription}
                        handleChangeLocalDescription={handleChangeLocalDescription}
                        getUpdatedStatus={getUpdatedStatus}
                        getUpdatedPriority={getUpdatedPriority}
                        getDeletedRow={getDeletedRow}
                      />
                  )}
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

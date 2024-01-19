import { useEffect, useState } from 'react'

import { useTables } from '../../hooks/useTables'

import { PageHeader } from './PageHeader'
import { PageMain } from './PageMain'

import './Page.css'

export function Page ({ tableId, updateTableTitle }) {
  const { getTable, tableInfo } = useTables()

  useEffect(() => {
    getTable(tableId)
  }, [tableId])

  const [newTitle, setNewTitle] = useState(tableInfo && tableInfo.title)

  useEffect(() => {
    setNewTitle(tableInfo && tableInfo.title)
  }, [tableInfo && tableInfo.title])

  return (
    tableInfo
      ? <article className='table-view-body'>
        <PageHeader title={newTitle} />
        <PageMain tableId={tableId} title={newTitle} setNewTitle={setNewTitle} updateTableTitle={updateTableTitle} />
      </article>
      : <></>

  )
}

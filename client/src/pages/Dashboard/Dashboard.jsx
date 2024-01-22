import { useEffect } from 'react'

import { useAuth } from '../../hooks/useAuth.js'
import { AsideMenu } from '../../components/AsideMenu/AsideMenu.jsx'

import { useTables } from '../../hooks/useTables.js'
import { Page } from '../../components/Page/Page.jsx'

import './Dashboard.css'

export function Dashboard () {
  const { getAllTables, tables, tableId, setTableId, tablesUpdated, updateTableTitle, addAPage, deleteAPage } = useTables()

  const { currentUser, navigate } = useAuth()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [])

  return (
    currentUser && currentUser
      ? <main className="user-main">
      <AsideMenu getAllTables={getAllTables} tables={tables} setTableId={setTableId} tablesUpdated={tablesUpdated} addAPage={addAPage} deleteAPage={deleteAPage} />
      <Page tableId={tableId} updateTableTitle={updateTableTitle} />
    </main>
      : <></>
  )
}

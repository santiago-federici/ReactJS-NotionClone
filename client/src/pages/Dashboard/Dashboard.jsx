import { useEffect } from 'react'

import { useAuth } from '../../hooks/useAuth.js'
import { AsideMenu } from '../../components/AsideMenu/AsideMenu.jsx'

import { useTables } from '../../hooks/useTables.js'
import { Page } from '../../components/Page/Page.jsx'

import './Dashboard.css'

export function Dashboard () {
  const { tableId, setTableId, tablesUpdated, updateTableTitle } = useTables()

  const { currentUser, navigate } = useAuth()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [])

  return (
    currentUser && currentUser
      ? <main className="user-main">
      <AsideMenu setTableId={setTableId} tablesUpdated={tablesUpdated} />
      <Page tableId={tableId} updateTableTitle={updateTableTitle} />
    </main>
      : <></>
  )
}

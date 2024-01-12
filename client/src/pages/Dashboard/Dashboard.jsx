import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/auth'
import { AsideMenu } from '../../components/AsideMenu'
import { Table } from '../../components/Table/Table.jsx'

import './Dashboard.css'

export function Dashboard () {
  const [tableId, setTableId] = useState()

  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [])

  return (
    currentUser && currentUser
      ? <main className="user-main">
      <AsideMenu setTableId={setTableId} />
      <Table tableId={tableId} setTableId={setTableId} />
    </main>
      : <></>
  )
}

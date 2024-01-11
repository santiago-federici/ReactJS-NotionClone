import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/auth'
import { AsideMenu } from '../../components/AsideMenu'
import { Table } from '../../components/Table'

import './Dashboard.css'

export function Dashboard () {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [])

  return (
    currentUser && currentUser
      ? <main className="user-main">
      <AsideMenu />
      <Table />
    </main>
      : <></>
  )
}

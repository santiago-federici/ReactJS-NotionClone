import { useEffect, useState } from 'react'
// import { AsideProvider } from '../../context/aside'
// import { GroupsProvider } from '../../context/groups'
// import { Filters } from '../Filters'
// import { GroupsContainer } from '../Groups/GroupsContainer'
// import { Header } from '../Header'
import { AsideMenu } from '../../AsideMenu'
import { UntitledTable } from '../../UntitledTable'
import './UserDefaultPage.css'

export function UserDefaultPage ({ userId }) {
  const [username, setUsername] = useState()
  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data[0].username)
      })

    fetch(`http://localhost:3000/tables/${userId}`)
      .then(res => res.json())
      .then(data => setTables(data))
  }, [])

  return (
    <main className="user-main">
      <AsideMenu userId={userId} username={username} setTables={setTables} tables={tables} />
      <UntitledTable />

      {/* {
        tables.length > 0
          ? <UntitledTable />
          : <UntitledTable />
      } */}

      {/* <section className='info-section'>
        <h1 className='page-title'>Tasks</h1>

        <GroupsProvider>

          <AsideProvider>

            <Header />

            <Filters />

            <GroupsContainer />

          </AsideProvider>
        </GroupsProvider>

      </section> */}
    </main>
  )
}

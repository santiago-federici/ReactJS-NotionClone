import { useEffect, useState } from 'react'
import { AsideProvider } from '../../context/aside'
import { GroupsProvider } from '../../context/groups'
import { Filters } from '../Filters'
import { GroupsContainer } from '../Groups/GroupsContainer'
import { Header } from '../Header'
import { PagesAside } from '../PagesAside'

export function HomePageWithAccount ({ userId }) {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data[0].username)
        setEmail(data[0].email)
      })
  }, [])

  return (
    <main className="app-main">
      <PagesAside userId={userId} username={username} />

      <section className='info-section'>
        <h1 className='page-title'>Tasks</h1>

        <GroupsProvider>

          <AsideProvider>

            <Header />

            <Filters />

            <GroupsContainer />

          </AsideProvider>
        </GroupsProvider>

      </section>
    </main>
  )
}

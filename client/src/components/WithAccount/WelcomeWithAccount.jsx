import { AsideProvider } from '../../context/aside'
import { GroupsProvider } from '../../context/groups'
import { Filters } from '../Filters'
import { GroupsContainer } from '../Groups/GroupsContainer'
import { Header } from '../Header'
import { PagesAside } from '../PagesAside'

export function WelcomeWithAccount () {
  return (
    <main className="app-main">
      <PagesAside />

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

import { AsideProvider } from './context/aside'
import { PagesAside } from './components/PagesAside'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { GroupsContainer } from './components/Groups/GroupsContainer.jsx'

import './App.css'
import { GroupsProvider } from './context/groups'

function App() {
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

export default App

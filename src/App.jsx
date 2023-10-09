import { AsideProvider } from './context/aside'
import { PagesAside } from './components/PagesAside'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { GroupsContainer } from './components/Groups/GroupsContainer.jsx'

import './App.css'

function App() {
  return (
    <AsideProvider>
      <main className="app-main">
        <PagesAside />

        <section className='info-section'>
          <h1 className='page-title'>Tasks</h1>

          <Header />

          <Filters />

          <GroupsContainer />
        </section>
      </main>
    </AsideProvider>
  )
}

export default App

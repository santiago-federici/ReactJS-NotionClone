import { Aside } from './components/Aside'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { GroupsContainer } from './components/Groups/GroupsContainer.jsx'

import './App.css'
import { ModalProvider } from './context/modal'

function App() {
  return (
    <ModalProvider>
      <main className="app-main">
        <Aside />

        <section className='info-section'>
          <h1 className='page-title'>Tasks</h1>

          <Header />

          <Filters />

          <GroupsContainer />
        </section>
      </main>
    </ModalProvider>
  )
}

export default App

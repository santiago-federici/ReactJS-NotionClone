import { Aside } from './components/Aside'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { TasksContainer } from './components/TasksContainer'

import './App.css'

function App() {
  return (
    <main className="app-main">
      <Aside />

      <section className='info-section'>
        <h1>Tasks</h1>

        <Header />

        <Filters />

        <TasksContainer />
      </section>
    </main>
  )
}

export default App

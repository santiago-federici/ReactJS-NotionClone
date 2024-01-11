import { Landing } from './pages/Landing/Landing.jsx'
import { Dashboard } from './pages/Dashboard/Dashboard.jsx'
import { Auth } from './pages/Auth/Auth.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/auth.jsx'

import './App.css'

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App

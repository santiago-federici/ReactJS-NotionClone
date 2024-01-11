import { UserDefaultPage } from './components/DefaultPages/User/UserDefaultPage.jsx'
import { NoUserDefaultPage } from './components/DefaultPages/NoUser/NoUserDefaultPage.jsx'
import { Auth } from './components/Auth/Auth.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/auth.jsx'

import './App.css'

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NoUserDefaultPage />} />
          <Route exact path='/userdefaultpage' element={<UserDefaultPage />} />
          <Route exact path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App

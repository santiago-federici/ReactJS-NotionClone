import { useState } from 'react'

import { UserDefaultPage } from './components/DefaultPages/User/UserDefaultPage.jsx'
import { NoUserDefaultPage } from './components/DefaultPages/NoUser/NoUserDefaultPage.jsx'
import { Login } from './components/Auth/Login.jsx'
import { Register } from './components/Auth/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { AuthProvider } from './context/auth.jsx'

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NoUserDefaultPage />} />
          <Route exact path='/userdefaultpage' element={<UserDefaultPage />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App

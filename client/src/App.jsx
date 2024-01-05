import { useState } from 'react'

import { UserDefaultPage } from './components/DefaultPages/User/UserDefaultPage.jsx'
import { NoUserDefaultPage } from './components/DefaultPages/NoUser/NoUserDefaultPage.jsx'
import { Login } from './components/Login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  const [userId, setUserId] = useState()
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NoUserDefaultPage />} />
        <Route exact path='/userdefaultpage' element={<UserDefaultPage userId={userId} />} />
        <Route exact path='/login' element={<Login setUserId={setUserId} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

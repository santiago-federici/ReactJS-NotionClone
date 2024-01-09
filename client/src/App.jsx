import { useState } from 'react'

import { UserDefaultPage } from './components/DefaultPages/User/UserDefaultPage.jsx'
import { NoUserDefaultPage } from './components/DefaultPages/NoUser/NoUserDefaultPage.jsx'
import { Login } from './components/Auth/Login.jsx'
import { Register } from './components/Auth/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  const [userId, setUserId] = useState()
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<NoUserDefaultPage />} />
        <Route exact path='/userdefaultpage' element={<UserDefaultPage userId={userId} />} />
          setUserId(data[0].id)
          setUserId(data[0].id)
        <Route exact path='/register' element={<Register setUserId={setUserId} />} />
        <Route exact path='/login' element={<Login setUserId={setUserId} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

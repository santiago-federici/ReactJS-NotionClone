// import { useState } from 'react'
import { HomePageWithAccount } from './components/WithAccount/HomePageWithAccount.jsx'
import { HomePageWithoutAccount } from './components/WithoutAccount/HomePageWithoutAccount.jsx'
import { Login } from './components/Login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { useState } from 'react'

function App() {
  const [userId, setUserId] = useState()
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePageWithoutAccount />} />
        <Route exact path='/app' element={<HomePageWithAccount userId={userId} />} />
        <Route exact path='/login' element={<Login setUserId={setUserId} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

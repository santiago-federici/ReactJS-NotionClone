// import { useState } from 'react'
import { WelcomeWithAccount } from './components/WithAccount/WelcomeWithAccount.jsx'
import { WelcomeWithoutAccount } from './components/WithoutAccount/WelcomeWithoutAccount.jsx'
import { Login } from './components/Login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<WelcomeWithoutAccount />} />
        <Route exact path='/app' element={<WelcomeWithAccount />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

// {
//   isLoggedIn
//     ? <WelcomeWithAccount />

//     : <WelcomeWithoutAccount setIsLoggedIn={setIsLoggedIn} />
// }

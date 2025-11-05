// import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserApp from './UserApp'
// ThemeProvider 를 import하여 안에 
// ThemeContext.Provider가 감싸는 형식을 구현
// import ThemeProvider from './ThemeContext'
// import ThemeLayout from './ContextAPI/pages/ThemeLayout'

import Home from './Context02/pages/Home'
import Profile from './Context02/components/Profile'
import LoginForm from './Context02/components/LoginForm'
import AuthProvider from './Context02/contexts/AuthContent'
import Header from './Context02/components/Header'

function App() {
  

  return (
    <>
      {/* <ThemeProvider>
        <ThemeLayout/>
      </ThemeProvider> */}
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App

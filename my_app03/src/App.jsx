import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './ReduxEx/Counter'
// import Counter from './ReduxToolkit/counter'
// import Cart from './CartEx/Cart'
// import Test from './test'
import Shop from './pages/Section'
import CartPage from './pages/CartPage'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CookieTest from './cookie/cookieTest'
import LoginCookie from './cookie/LoginCookie'

function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/cartList' element={<CartPage/>}></Route>
      </Routes>
    </BrowserRouter> */}
      {/* <CookieTest/> */}
      <LoginCookie/>
    </>
  )
}

export default App

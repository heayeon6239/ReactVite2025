import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import useFoodData from './pages/Food/FoodData'
import FoodList from './pages/Food/FoodList'
import Main from './pages/Food/Home/main'
import FoodCook from './pages/Food/FoodCook'
import FoodDetail from './pages/FoodDetail'
import Login from './common/Login/Login'
import LoginProvider from './common/Login/LoginContent'
import Wish from './pages/Wish/Wish'
import WishProvider from './contexts/WishContexts'
import Home from './common/Login/Home'
import Join from './pages/Join/Join'

function App() {
  
const foodData = useFoodData();

  return (
    <>
    <LoginProvider>
      <BrowserRouter>
      <WishProvider>
        
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/new' element={<FoodList data={foodData}/>}></Route>
            <Route path='/Cook' element={<FoodCook data={foodData}/>}></Route>
            <Route path='/new/datail/:id' element={<FoodDetail data={foodData}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/wish' element={<Wish data={foodData}/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/join' element={<Join/>}></Route>
          </Routes>
          <Footer/>
        
      </WishProvider>
      </BrowserRouter>
    </LoginProvider>
    </>
  )
}

export default App

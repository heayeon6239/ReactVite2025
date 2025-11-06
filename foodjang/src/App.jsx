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

function App() {
  
const foodData = useFoodData();

  return (
    <>
      <BrowserRouter>
      <WishProvider>
        <LoginProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/new' element={<FoodList data={foodData}/>}></Route>
            <Route path='/Cook' element={<FoodCook data={foodData}/>}></Route>
            <Route path='/new/datail/:id' element={<FoodDetail data={foodData}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/wish' element={<Wish data={foodData}/>}></Route>
          </Routes>
        
          <Footer/>
        </LoginProvider>
      </WishProvider>
      
      </BrowserRouter>
    </>
  )
}

export default App

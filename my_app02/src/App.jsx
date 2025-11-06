import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserApp from './UserApp'
// ThemeProvider 를 import하여 안에 
// ThemeContext.Provider가 감싸는 형식을 구현
// import ThemeProvider from './ThemeContext'
// import ThemeLayout from './ContextAPI/pages/ThemeLayout'

// import Home from './Context02/pages/Home'
// import Profile from './Context02/components/Profile'
// import LoginForm from './Context02/components/LoginForm'
// import AuthProvider from './Context02/contexts/AuthContent'
// import Header from './Context02/components/Header'

// import WishProvider from './Wishlist/WishlistContext'
// import ProductList from './Wishlist/ProductList'
// import WishlistPage from './Wishlist/WishlistPage'

import WishlistProvider from './Wishlist 02/WishlistContext'
import ProductList from './Wishlist 02/ProductList'
import WishlistPage from './Wishlist 02/WishlistPage'

function App() {

  // ProductList, WishlistPage를 선택하도록 하기위한 상태변수
  const [showList,setShowList]=useState(false);
  

  return (
    <>
      {/* <ThemeProvider>
        <ThemeLayout/>
      </ThemeProvider> */}

      {/* <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </AuthProvider> */}

      {/* <WishProvider>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/wish' element={<WishlistPage/>}/>
        </Routes>
      </WishProvider> */}

      <WishlistProvider>
        <header style={{display:'flex',padding:'20px',justifyContent:'center',backgroundColor:'#eee'}}>
          <h2>찜하기 예제</h2>
          {/* 찜목록 보기 <-> 상품 보기 토글 */}
          <button type='button' onClick={()=>setShowList(!showList)}>
            {showList?'상품 보기':'찜 목록 보기'}
          </button>
        </header>
        {/* showList가 true -> wishListPage, false -> productList*/}
        {showList?<WishlistPage/>:<ProductList/>}
        
      </WishlistProvider>

      

    </>
  )
}

export default App

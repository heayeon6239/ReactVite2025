import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
// 00 src -> assets -> 이미지 파일은 반드시 import함
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// 00 import는 외부파일을 가져옴
import './App.css'
// 00 이미지를 하나하나 import해서 개별로 가져올 수 있음
// public폴더의 이미지 파일은 import하지 않아도 사용 가능
// import image01 from '../public/images/image01.png'
// import Test from './stateComponents/test'
// import Exstate13 from './stateComponents/Ex13'
// import Exstate14 from './stateComponents/Ex14'
// import Exstate15 from './stateComponents/Ex15'
// import Exstate16 from './stateComponents/Ex16'
// import Exstate17 from './stateComponents/Ex17'
// import Exstate18 from './stateComponents/Ex18'
// import Blog from './stateComponents/Blog'
// import MovieReview from './components/movie/movieReview'
// import ShoppingList from './components/shopping/shopping'
// import CommentBoard from './components/commentBoard/commentBoard'
// import ScoreManager from './components/student/Student'
// import ModalChange from './stateUI/uiTest01'
// import LoginView from './stateUI/uiTest02'
// import PromptChange from './stateUI/uiTest03'
// import Parent from './stateUI/uiTest04'
// import AuthApp from './stateUI/member/AuthApp'
// import MovieApp from './stateUI/movie/MovieApp'
// import BlogC from './stateComponents/Blog/blogc'
// import NewMovie from './stateUI/NewMovie/MovieApp'
// import ShopApp from './stateUI/Shop/ShopApp'
// import FoodApp from './stateUI/food/FoodApp'
// import Hover01 from './stateUI/hover01'
// import Hover04 from './stateUI/hover04'
// import Changeimg04 from './stateUI/Changeimg04'
// import TableOrderApp from './stateUI/TableOrder/TableOrderApp'
// import Eff03 from './Effect/Eff03'
// import Eff09 from './Effect/Eff09'
// import Ex11 from './Effect/Ex11'
// import Exfecth from './JSON/fecth'
// import ExJ01 from './JSON/ExJ01'
// import ExJ05 from './JSON/ExJ05'
// import ProductApp from './JSON/ExJ06/productApp'
// import Rate from './JSON/rate'
// import Home from './Pages/home'
// import About from './Pages/about'
// import ProdApp from './Pages/ProdApp'
// import ProDetail from './Pages/ProDetail's
// import FakeStore from './Pages/Fake/FakeStore'
// import FakeStoreDetail from './Pages/Fake/FakeStoreDetail'
// import useProduct from './Pages/Fake/Data'

import useRecipeData from './Pages/Recipes/RecipData'
import RecipeList from './Pages/Recipes/RecipeList'
import RecipeDetail from './Pages/Recipes/RecipeDetail'


// -- 컴포넌트의 기본구조 --
// function UserCard(){
//   return(
//     <>
//       <div>
        
//       </div>
//     </>
//   )
// }

// 00 UserCard()함수 생성하기
// UserCard()컴포넌트를 APP()컴포넌트의 자식으로 사용할 예정
// App()컴포넌트의 name, age매개변수를 => props 명령어를 이용하여
// 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능 (부모 -> 자식 만 매개변수 보내기 가능) !!!!!!!!!!!!!!!!!!!!
// props는 부모의 모든 매개변수를 대변
// {props.name}, {props,age}

// function UserCard(props){
//   return(
//     <>
//       <div style={{border:'1px solid #ddd',
//               padding:'15px',
//               margin:'10px',
//               borderRadius:'8px'
//       }}>
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>

//       </div>
//     </>
//   )
// }

// props로 매개변수를 보내지 않고 직접 매개변수 값을 지정
// {name, age}형식으로 작성
// function UserCard({name,age}){
//   return(
//     <>
//       <div style={{border:'1px solid #ddd',
//               padding:'15px',
//               margin:'10px',
//               borderRadius:'8px'
//       }}>
//         <h2>{name}</h2>
//         <h2>{age}</h2>

//       </div>
//     </>
//   )
// }

// 00 function App(){} => react에서 App()는 컴포넌트라고 부름
function App() {
  // 리액트는 반드시 return() 안에서 실행할 HTML 문서를 작성한다. !!!!!!!!!!!!!!!!!!!
const name='홍길동'; 

 // true(===1), flase(===0) => 논리값 (문자값 ' '이 아님) 
// const isLoggin=true;

// const fruits=['사과','오렌지','바나나'];

// const user={name:'김철수', age:25, email:'kim@naver.com'}

// name -> key, '김철수' -> value 
// key.value -> name.'김철수'

// const btnClick=()=>{
//   console.log('버튼 클릭');
// }

// const products = [
//                     { id: 1, name: "노트북", price: 1200000 },
//                     { id: 2, name: "마우스", price: 30000 },
//                     { id: 3, name: "키보드", price: 80000 }
//                   ];

// 내가 만든 useProduct()커스텀 훅 호출
// const data=useProduct();
const recipeData=useRecipeData();
  return (
    // 00 <></> -> (빈태그)프래그넌트,
    //             리액트는 HTML작성시 반드시 부모태그가 하나만 존재해야하므로
    //             비어있는 태그를 사용하도록 허용한 기술

    // 리액트는 반드시 닫는 태그가 존재해야함 : <hr/>
    <>
        {/* 문제 02 */}
        {/* <UserCard02 name='개나리' age={18} city='서울'/>
        <UserCard02 name='김백합' age={40} city='경기'/>
        <UserCard02 name='최영숙' age={25} city='인천'/> */}

        {/* 문제 03 */}
        {/* <Product03 name='노트북' price={120000}/>
        <Product03 name='마우스' price={15000}/> */}

        {/* 문제 06 */}
        {/* <Alert type='error' msg='오류발생!'/>
        <Alert type='success' msg='성공'/>
        <Alert type='info' msg='알림'/>
        <Alert type='warn' msg='경고'/> */}


        {/* javaScript의 class를 React는 className로 사용 !!!!!!!!!!!!!! */}
        {/* react에서 변수의 값을 사용하려면 반드시 { 변수이름 입력 }  */}
        {/* <div style={{backgroundColor:'lightblue',padding:'20px',borderRadius:'10px'}}> */}

          {/* 문제 01 - name:'홍길동'정의 후 <h1>태그에 출력하기 */}
          {/* <h1>{name}</h1> */}
          {/* <img src={image01} alt='샘플 랜덤 이미지'/> */}
          {/* <img src={reactLogo} alt='샘플 랜덤 이미지'/> */}

          {/* 문제 02 */}
          {/* <h1>{isLoggin === true?'환영합니다':'로그인하세요' }</h1> */}

          {/* 문제 03 */}
          {/* 배열이름.map((fruits, index)=>()) */}
          {/* <ul>
            {fruits.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul> */}

          {/* 문제 04 */}
          {/* <h3>{user.name}</h3> 
          <h3>{user.age}</h3>
          <h3>{user.email}</h3> */}

          {/* <p>스타일이 적용된 박스</p> */}

          {/* <button type='button' onClick={btnClick}>클릭</button> */}

            {/* {products.map((item,index)=>(
              <div style={{border:'1px solid #ddd',
                      padding:'15px',
                      margin:'10px',
                      borderRadius:'8px'
              }} key={item.id}>
                <p>{item.name}</p>
               <p>{item.price.toLocaleString()}원</p> 
                </div>
            ))} */}
 
        {/* </div> */}

        {/* UserCard안의 name과 age는 매개변수 */}
        {/* <UserCard name='홍길동' age={20}/>
        <UserCard name='개나리' age={15}/>
        <UserCard name='진달래' age={30}/> */}

        {/* <Ex01/> */}
        {/* <Ex02/> */}
        {/* <Ex03/> */}
        {/* <Ex04/> */}
        {/* <Ex05/> */}
        {/* <Ex06/> */}
        {/* <Ex07/> */}
        {/* <Ex08/> */}
        {/* <Ex09/> */}
        {/* <Ex10/> */}
        {/* <Ex11/> */}
        {/* <Ex12/> */}
        {/* <Ex13/> */}
        {/* <Parent/> */}
        {/* <Parent02/> */}
        {/* <Parent03/> */}
        {/* <Parent04/> */}
        {/* <Welcome name='개나리'/> */}
        {/* <Counter01/> */}
        {/* <Counter02/> */}
        {/* <Exstate01/> */}
        {/* <Exstate02/> */}
        {/* <Exstate03/> */}
        {/* <Exstate04/> */}
        {/* <Exstate05/> */}
        {/* <Exstate06/> */}
        {/* <Exstate07/> */}
        {/* <Exstate08/> */}
        {/* <Exstate09/> */}
        {/* <Exstate10/> */}
        {/* <Exstate11/> */}
        {/* <Test/> */}
        {/* <Exstate13/> */}
        {/* <Exstate14/> */}
        {/* <Exstate15/> */}
        {/* <Exstate16/> */}
        {/* <Exstate17/> */}
        {/* <Exstate18/> */}
        {/* <Blog/> */}
        {/* <MovieReview/> */}
        {/* <ShoppingList/> */}
        {/* <CommentBoard/> */}
        {/* <ScoreManager/> */}
        {/* <ModalChange/> */}
        {/* <LoginView/> */}
        {/* <PromptChange/> */}
        {/* <Parent/> */}
        {/* <AuthApp/> */}
        {/* <MovieApp/> */}
        {/* <BlogC/> */}
        {/* <NewMovie/> */}
        {/* <ShopApp/> */}
        {/* <FoodApp/> */}
        {/* <Hover01/> */}
        {/* <Hover04/> */}
        {/* <Changeimg02/> */}
        {/* <Changeimg04/> */}
        {/* <TableOrderApp/> */}
        {/* <Eff03/> */}
        {/* <Eff09/> */}
        {/* <Ex11/> */}
        {/* <Exfecth/> */}
        {/* <ExJ01/> */}
        {/* <ExJ05/> */}
        {/* <ProductApp/> */}
        {/* <Rate/> */}
        {/* <BrowserRouter> */}
          <Routes>
            <Route path='/' element={<RecipeList data={recipeData}/>}/>
            <Route path='detail/:id' element={<RecipeDetail data={recipeData}/>}/>
          </Routes>
        {/* </BrowserRouter> */}
        {/* 커스텀 훅이든 이미 존재하는 훅이든 JSX안으로 가져올 수 없다. */}
    </>
  )
}

// export는 App컴포넌트를 밖으로 내보냄
export default App

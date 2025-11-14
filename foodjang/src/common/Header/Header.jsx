import { useState } from "react"
import {Link} from "react-router-dom"
import '../Header/Header.css'
// import Main from "../../pages/Food/Home/main"
import { LoginContext } from "../Login/LoginContent";
import { useContext } from "react";

export default function Header(){

    // const [focus,setFocus]=useState(false);

    // const click=()=>{
    //     setFocus(!focus);
    // }

    // const focusStyle= focus ?
    //     {fontWeight: 700, color: '#222'}:{};

    const {user}=useContext(LoginContext);
    return(
        <div className="header">
            <p>지금 가입하고 인기상품 혜택가로 받아가세요.</p>
            <div className="header01">
                <div className="left_01">
                    <p>+BOOKMARK</p>
                </div>
                <div className="right_01">
                    <Link to={`/login`}><span>{!user?'로그인':'로그아웃'}</span></Link>
                    <Link to={'/join'}><span>회원가입</span></Link>
                    <Link to={`/wish`}><span>찜하기</span></Link>
                </div>
            </div>
            <Link to='/'>
                <img src="/image/logo.gif" alt="로고"/>
            </Link>
            <div className="menu">
                <span >전체 카테고리</span>
                <Link to={`/new`}>
                    <span >신상품</span>
                </Link>
                <Link to={'/cook'}>
                    <span >요리 난이도 별 상품</span>
                </Link>
                <span>알뜰쇼핑</span>
                <span >선물세트</span>
                <span >이벤트</span>
                <span >스토리</span>
            </div>
            <div className="section">
                {/* <Main/> */}
            </div>
        </div>
    )
}
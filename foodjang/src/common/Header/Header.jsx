import { useState } from "react"
import {Link} from "react-router-dom"
import '../Header/Header.css'
// import Main from "../../pages/Food/Home/main"

export default function Header(){
    return(
        <div className="header">
            <p>지금 가입하고 인기상품 혜택가로 받아가세요.</p>
            <div className="header01">
                <div className="left_01">
                    <p>+BOOKMARK</p>
                </div>
                <div className="right_01">
                    <Link to={`/login`}><span>로그인</span></Link>
                    <span>회원가입</span>
                    <span>고객센터</span>
                </div>
            </div>
            <Link to='/'>
                <img src="/image/logo.gif" alt="로고"/>
            </Link>
            <div className="menu">
                <span>전체 카테고리</span>
                <Link to={`/new`}>
                    <span>신상품</span>
                </Link>
                <Link to={'/cook'}>
                    <span>요리 난이도 별 상품</span>
                </Link>
                <span>알뜰쇼핑</span>
                <span>선물세트</span>
                <span>이벤트</span>
                <span>스토리</span>
            </div>
            <div className="section">
                {/* <Main/> */}
            </div>
        </div>
    )
}
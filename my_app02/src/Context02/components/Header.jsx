// - useContext : Context의 값을 가져올 수 있는 React Hook
import { useContext } from "react";
// - AuthContext : 내가 만든 데이터를 가져오기 위한 저장소
import { AuthContext } from "../contexts/AuthContent";
// - Link : 페이지 이동을 위한 React Router 컴포넌트
import {Link} from "react-router-dom";

// Header 컴포넌트 정의 (화면 상단 네비게이션 역할)
export default function Header(){
    // useContext(AuthContext)를 통해 전역 상태의 변수를 가져옴
    // user : 현재 로그인 사용자 정보
    // logout : 로그아웃 함수
    const {user,logout}=useContext(AuthContext);

    return(
        <header>
            <h1>Context 인증 실습</h1>

            {/* 홈 링크 */}
            <Link to='/'>홈</Link>
            
            {user ? (
                // user가 존재하면 (로그인 상태) -> 로그아웃
                <div>
                    <Link to='/Profile'>프로필</Link>
                    <button type="button" onClick={logout}>로그아웃</button>
                </div>
                
            ):(
                // user가 null인 상태 (로그아웃 상태)
                // 로그인 페이지로 이동하는 링크만 보여줌
                <Link to='/login'>로그인</Link>
            )}
            

            
            
        </header>
    )
}
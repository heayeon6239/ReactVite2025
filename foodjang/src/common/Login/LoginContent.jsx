import {createContext, useState} from "react";
import {Link} from "react-router-dom";

// 01. context 데이터 저장소 생성 (반드시 export)
export const LoginContent=createContext();

// 02. Provider 컴포넌트 정의 (함수 생성)
export default function LoginProvider({children}){

    // 입력한 아이디 담을 변수
    const [id,setId]=useState(null);
    // 입력한 비밀번호 담을 변수
    const [pw,setPw]=useState(null);

    // 입력받을 아이디/ 비밀번호를 id,pw 변수에 담는 함수
    const login=(userId,userPw)=>{
        setId(userId);
        setPw(userPw);
    }

    // 로그아웃 함수
    const logout=()=>{
        setId(null);
        setPw(null);
    }

    return(
        <LoginContent.Provider value={{setId,setPw,login,logout,id,pw}}>
            {children}
        </LoginContent.Provider>
    )
}
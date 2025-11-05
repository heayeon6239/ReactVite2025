import {createContext, useState} from "react";
import { useContext } from "react";

// 01. context 데이터 저장소 생성
//     - createContext()는 React의 전역 저장소(공유 공간)를 만드는 함수
//     - 컴포넌트 트리 전체에 데이터를 전달할 수 있게 해줌
//     ( 반드시 export 해야 함수를 내보낼 수 있음)
export const AuthContext=createContext();

// 02. Provider 컴포넌트 정의
//     - AuthContext 컴포넌트는 Context의 '공급자(Provider)' 역할을 함
//     - App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달
//     - value={{데이터1, 데이터2}}에 값을 실어 옮김
//     => Provider를 할 수 있는 함수를 생성
export default function AuthProvider({children}){
    
    // (1) 상태변수 user : 현재 로그인한 사용자 정보 저장
    //     기본값은 null -> 아직 로그인하지 않은 상태
    //     기본값은 => input에서 입력할 때 빈값은 입력 금지 (alret()창으로 예외처리 또는 방어코드 작성)
    const [user,setUser]=useState(null);

    // (2) 로그인 함수 login() : 사용자 이름을 받아 user 객체로 저장
    const login=(username)=>{
        // setUser(user)
        setUser(username) 
        // -> 이것도 가능
    }

    // (3) 로그아웃 함수 logout() : user를 null로 초기화 (로그아웃)
    const logout=()=>{
        setUser(null)
    }


    return(
        // Provider : value 속성을 통해 하위 컴포넌트에 데이터를 공유
        // children : <AuthProvider> ~~~ </AuthProvider> 안의 포함된 컴포넌트를 의미
        <AuthContext.Provider value={{user,login,logout,setUser}}>
            {children}
        </AuthContext.Provider>
    )

}
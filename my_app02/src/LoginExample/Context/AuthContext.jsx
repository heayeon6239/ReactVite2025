import { createContext } from "react";
import { useState,useEffect } from "react";

// 01. 생성자 함수
export const AuthContext=createContext();

// 02. Provider
export default function AuthProvider({children}){
    const [user,setUser]=useState(null);
    console.log(user);

    const login = (username)=>{
        setUser(username);
    }
    const logOut = ()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
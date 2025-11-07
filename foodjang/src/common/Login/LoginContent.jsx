import { createContext} from "react";
import { useState,useEffect } from "react";

export const LoginContext=createContext();

export default function LoginProvider({children}){

    const [user,setUser]=useState(null);
    console.log(user);

    const login=(username)=>{
        setUser(username);
    }
    const logOut=()=>{
        setUser(null);
    }

    
    return(
        <LoginContext.Provider value={{login,user,logOut}}>
            {children}
        </LoginContext.Provider>
    )
}

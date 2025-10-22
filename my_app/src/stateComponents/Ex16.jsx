// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate16(){

    const [user,setUser]=useState({name:'철수', age:25});
    const changeAge=()=>{
        setUser({name:'철수', age:user.age+1})
        console.log(user);
    }
    
    return(
        <>
            <p>{user.name}-{user.age}</p>
            <button onClick={changeAge}>나이 +1</button>
        </>
    )
}
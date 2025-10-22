// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate14(){

    const [date,setDate]=useState(new Date().toLocaleTimeString())
    const changeDate=()=>{
        setDate(new Date().toLocaleTimeString())
    }
    
    return(
        <>
            <p>{date}</p>
            <button onClick={changeDate}>갱신</button>
        </>
    )
}
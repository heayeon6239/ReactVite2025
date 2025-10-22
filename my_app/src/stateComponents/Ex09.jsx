// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate09(){

    const [num,setNum]=useState(0);
    // const numText='짝수입니다'
    const changeNum=()=>{
        setNum((num+1));
    }
    
    return(
        <>
            <p>{num}</p>
            <button onClick={changeNum}>+</button>
            <p>{num%2===0?'짝수입니다':''}</p>
        </>
    )
}
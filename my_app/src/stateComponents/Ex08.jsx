// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate08(){

    const [text,setText]=useState('좋아요👍')
    const ChangeText=()=>{
        setText(text==='좋아요👍'?'싫어요👎':'좋아요👍')
    }
    
    return(
        <>
            <span>{text}</span>
            <button onClick={ChangeText}>변경</button>
        </>
    )
}
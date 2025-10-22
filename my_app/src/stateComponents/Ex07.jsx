// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate07(){

    const [color,setColor]=useState('red');
    const colorChange=()=>{
        setColor(color==='red'?'green':color==='green'?'blue':'red')
    }
    
    return(
        <>
            <div style={{width:'300px',height:'300px',backgroundColor:color}}></div>
            <button onClick={colorChange}>다음 색상</button>
        </>
    )
}
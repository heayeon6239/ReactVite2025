// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate03(){

    const [color,setColor]=useState('tomato')

    const colorChange=()=>{
        setColor(color==='tomato'?'blue':'tomato')
    }

    return(
        <>
            <div style={{width:'300px',height:'300px',backgroundColor:color}}>
                <button onClick={colorChange}>색변경</button>
            </div>
        </>
    )
}
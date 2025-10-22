// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate06(){

    const [big,setBig]=useState(14)
    
    return(
        <>
            <div>
                <p style={{fontSize:big+'px'}}>커지는 글씨!</p>
                <button onClick={()=>setBig(big+5)}>크게</button>
            </div>
        </>
    )
}
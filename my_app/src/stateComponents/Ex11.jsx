// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate11(){

    const [color,setColor]=useState('')
    const colorChange=(e)=>{
        setColor(e.target.value)
    }
    
    return(
        <>
            <div style={{width:'300px',height:'300',backgroundColor:color}}>
                <input onChange={colorChange} type="text" placeholder="예: pink"></input>
            </div>
        </>
    )
}
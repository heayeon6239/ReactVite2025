// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate04(){

    const [good,setGood]=useState(0);
    function goodNum(){
        setGood(good+1);
    }
    
    return(
        <>
            <div>
                <button onClick={goodNum}>👍{good}</button>
                <p>좋아요</p>
            </div>
        </>
    )
}
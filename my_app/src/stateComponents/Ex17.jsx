// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate17(){

    const [text,setText]=useState(16)
    const [text01,setText01]=useState('black')
    function changeText(){
        setText(text+10)
    }
    function changeText01(){
        setText01(text01==='black'?'tomato':'black')
    }
    function changeAll(){
        changeText();
        changeText01();
    }
    
    return(
        <>
            <p style={{fontSize:text+'px', color: text01}}>변하는 글자</p>
            <button onClick={changeAll}>변화!</button>
        </>
    )
}
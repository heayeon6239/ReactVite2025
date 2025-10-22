// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate13(){

    const [text,setText]=useState('');
    //  console.log(text);
    function changeText(e){
        setText(e.target.value)
       
    }

    // !!! setText(여기엔 대응(=)은 들어가면 안됨!! , 연산(+,- ..)만 가능함!!!!!)
    // const changeText02=()=>{
    //     setText(text='')
    // }
    
    return(
        <>
            <input onChange={changeText} type="text" value={text}></input>
            <button onClick={()=>{setText('')}}>초기화</button>
            <p>{text}</p>
        </>
    )
}
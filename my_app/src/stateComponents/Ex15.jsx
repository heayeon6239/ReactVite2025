// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate15(){

    const [name,setName]=useState('홍길동');
    const [age,setAge]=useState(20);

    function changeName(){
        setName(name==='홍길동'?'이순신':'홍길동')
    }
    function changeAge(){
        setAge(age===20?30:20)
    }

    function changeNA(){
        changeName();
        changeAge();
    }
    
    return(
        <>
            <p>{name} ({age})</p>
            <button onClick={changeNA}>정보 변경</button>
        </>
    )
}
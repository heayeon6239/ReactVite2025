// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";


// props는 부모 -> 자식 데이터를 읽기 전용으로 보내줌
// porps는 값, 변수, 함수 모두 props로 보내짐

// 부모
export default function Exstate18(){

    const [num, setNum]=useState(0);
    
    const changeNum=()=>{
        setNum(num+1);
    }
    
    return(
        <>
            {/* <p>값:{num}</p> */}

            {/* 자식한테 보내고 싶은 내용들을 다 담음 !!! */}
            <Child18 numUp={num} up={changeNum}/>
        </>
    )
}

//  자식
function Child18(props){
    return(
        <>
            <p>값:{props.numUp}</p>
            <button onClick={props.up}>+1</button>
        </>
    )
}
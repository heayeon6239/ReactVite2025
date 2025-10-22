// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate09(){

    const [num,setNum]=useState(0);
    // function plus(){
    //     setNum(num+1);
    // }
    // function minus(){
    //     console.log( setNum(num-1))
    //     setNum(num-1);

        
    // }
    // function minus(){
    //     if(num>0){
    //         setNum(num-1);
    //     }else{
    //         setNum(num);
    //         alert('안됨');
    //     }
        
    // }
    
    return(
        <>
            <button onClick={() => {num <= 0 ? alert('안됨') : setNum(num-1)}}>-</button>
            <span>{num}</span>
            <button onClick={()=>{setNum(num+1)}}>+</button>
        </>
    )
}
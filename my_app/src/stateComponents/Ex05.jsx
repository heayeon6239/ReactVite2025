// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate05(){

    // const [img,setImg]=useState("public/vite.svg")
    // function imgChange(){
    //     setImg(img ==='public/vite.svg'?'':'public/vite.svg');
    // }

    const [img,setImg]=useState(true);
    
    return(
        <>
            <div>
                {/* <button onClick={imgChange}>이미지 토글</button> */}
                {/* <img src={img}/> */}
                
                <button onClick={()=>setImg(!img)}>이미지 토글</button>
                {img && <img src="/vite.svg"/>}
            </div>
        </>
    )
}
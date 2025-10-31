import { useEffect, useState } from "react";

export default function Ex03(){

    const [time,setTime]=useState(0);

    useEffect(()=>{
        let timer=setInterval(()=>{setTime(time+1)},1000);
        // setInterval( () => {}, 초) => 실행을 반복
        // setTimeOut( () => {}, 초) => 1번만 실행
        // 화살표 함수 !!!!!

        // cleanUp 함수 => 언마운트(죽음)될 때 삭제되는 함수
        return(()=>{clearInterval(timer)});
    },[time]);
    
    return(
        <>
            <h2>자동 타이머</h2>
            <p>{time}</p>
            <p>초가 경과했습니다</p>
        </>
    )

}
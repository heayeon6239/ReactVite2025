import {useEffect, useState} from 'react'

export default function Eff05(){
    // time의 용도 -> 시간 누적 => setTime(time +1)
    const[time,setTime]=useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>setTime(time+1),1000)
        // cleanUp 함수 필요
        return()=>clearInterval(timer)
    })
    // 의존성 배열을 사용 X -> 무한 반복 시키기 위해
    
    return(
        <>
            <p>⏰{time}초 경과</p>
        </>
        
    )
    
}
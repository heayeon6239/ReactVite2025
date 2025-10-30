import { useEffect, useState } from "react";

export default function Ex07(){

    // new Date() => 오늘 날짜/현재시간을 반환함
    const [currentTime,setCurrentTime]=useState(new Date());

    useEffect(()=>{
        // 1초마다 실행되는 함수
        let nowTime=setInterval(()=>{
            // (코어 객체(오브젝트 배열 {key:value ....})이기 때문에 
            //  `${}:${}:${}`는 문자형식이기 때문에 오류가 뜸)
            const currNow= new Date(); 
            // (얕은 복사해서 리랜더링되야함) -> 객체 형식으로 현재 시간 가져오기 
            setCurrentTime(currNow) // 상태를 업데이트하면 화면도 같이 바뀜
        },1000);

        // cleanUp 함수
        return(()=>{clearInterval(nowTime)});
    },[]);

    // 시:분:초 => 두자리씩 출력
    const twoTime=(num)=> (num<10?`0${num}`:num);

    // 시:분:초 추출
    const hour=twoTime(currentTime.getHours());
    const minute=twoTime(currentTime.getMinutes());
    const second=twoTime(currentTime.getSeconds());

    return(
        <>
            <h2>DIGITAL CLOCK</h2>
            <h1>{hour} : {minute} : {second}</h1>
            <p>{currentTime.toLocaleDateString()}</p>
        </>
    )

};
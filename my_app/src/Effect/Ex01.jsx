import { useEffect, useState } from "react";

export default function Ex01(){

    useEffect(()=>{
        // < 모든 HOOK은 생명주기 존재 >
        // 01. => 마운트(랜더 시작) 
        // 02. => 업데이트 (setUpdate()) 
        // 03. => 업데이트된 내용이 리랜더링 되고 난후 언마운트(죽음)

        // 01. useState() => 랜더, 업데이트 필요

        // 02. useEffect() => 랜더 이외의 작업, 
        //                 => 네트워크에서 자료를 가져오는 일...
        // - useEffect(() => {}) -> 랜더될때 마다 실행
        // - useEffect(() => {},[]) -> 처음 랜더될때 1회 실행
        // - useEffect(() => {},[의존성 배열]) -> 의존성 배열이 실행될때마다 실행
        console.log('컴포넌트가 마운트되었습니다!')
    },[])

    return(
        <>
            <h2>useEffect 기본 예제</h2>
            <p>F12를 눌러 콘솔을 확인해보세요!</p>
        </>
    )

}
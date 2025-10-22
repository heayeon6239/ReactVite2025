// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate01(){

    // 03. useState()훅을 이용하여 변수 지정
    //     const [이름, set이름] = useState(초기값)
    //     hello = '안녕하세요.' !!!!

    //     hello로 비교한 후 -> 비교 결과를 setHello()에 넣음 or
    //     setHello()에 직접 비교
    const [hello,setHello]=useState('안녕하세요.')
    
    // 04. 함수로 작성하기 : text가 변하는 함수
    function helloChange(){
        setHello(hello === '안녕하세요.'?'hello':'안녕하세요.') ;
    }

    return(
        <>
            <h2>{hello}</h2>
            <button onClick={helloChange}>Toggle</button>
        </>
    )
}
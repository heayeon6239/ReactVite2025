// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";

// 02. 한번에 함수 생성하면서 export까지 완성
export default function Exstate02(){

    // input의 onChange()함수 이용해 작성
    // element.target.value = e.target.value !!! (Dom에 접근하는 방식)
    // => input의 입력한 값을 가져올 수 있음
    const [inputText,setInputText]=useState('')

    // 업데이트용 함수
    const textChange=(e)=>{
        setInputText(e.target.value)
    }

    return(
        <>
            <input onChange={textChange} type="text" placeholder='입력하세요.'/>
            <h3>입력한 내용:{inputText}</h3>
            {/* {setInputText}는 쓸 수 없음 (생명주기!!!! 할거 다하면 죽음)
                업데이트만 되도록 누적이 안됨, 메모리가 없음 / 오로지 반복 */}
        </>
    )
}
import React,{useState} from "react";

export default function Test(){

    const[item, setItem]=useState([])
    const addItem=()=>{

        // console의 item 배열에 값이 추가되어도
        // react 입장에서는 item(힙)의 주소가 바뀌지 않았다고 판단하여
        // 화면을 업데이트하지 X 
        // -> 고로, 리렌더링을 하지않아 화면에는 출력이 되지 않음

        // item.push(`아이템 ${item.length+1}`)
        console.log(`아이템:${item}`)
        // 방법 01.
        setItem([...item,`아이템 ${item.length+1}`])
    }
    
    return(
        <>
        <button 
        // 방법 01.
        onClick={addItem}
            // 방법 02.
            // onClick={()=>{setItem([...item,`아이템 ${item.length+1}`])}}
            >추가</button>
            <ul>
                {item.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
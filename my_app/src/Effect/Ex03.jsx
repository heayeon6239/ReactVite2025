import { useEffect, useState } from "react";

export default function Ex03(){

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('현재 카운트'+count);
    },[count]);

    // - 핸들러
    const minusHandler=()=>{
        setCount(count-1);
    }
    // + 핸들러
    const plusHandler=()=>{
        setCount(count+1);
    }
    
    return(
        <>
            <h2>Counter with useEffect</h2>
            <p>{count}</p>
            <button type="button" onClick={minusHandler}>-</button>
            <button type="button" onClick={plusHandler}>+</button>
        </>
    )

}
import { useEffect, useState } from "react";

export default function Ex08(){

    const [num01,setNum01]=useState(0);
    const [num02,setNum02]=useState(0);
    const [totalNum,setTotalNum]=useState(0);

    useEffect(()=>{
        setTotalNum(num01*num02);
        
    },[num01,num02]);
    console.log(`${num01} X ${num02} = ${totalNum}`);

    const num001=(e)=>{
        setNum01(e.target.value);
    };
    const num002=(e)=>{
        setNum02(e.target.value);
    };

    return(
        <>
            <h2>곱셈 계산기</h2>
            <input type="number" onChange={num001}></input>
            <input type="number" onChange={num002}></input>
            <p>결과:</p>
            <h2 style={{color:'dodgerblue'}}>{totalNum}</h2>
            <p>콘솔을 열면 계산 과정도 확인할 수 있습니다.</p>
        </>
    )

};
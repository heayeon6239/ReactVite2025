import { useEffect, useState } from "react";

export default function Ex05(){

    const [titles,setTitles]=useState('');

    useEffect(()=>{
        // 입력값이 있으면 그 값을, 아니면 기본 제목을 설정
        if(titles.trim() !== ''){
            document.title=titles;
        }else{
            document.title="제목을 입력하세요";
        }
        
    },[titles]);

    const change=(e)=>{
        setTitles(e.target.value)
    }
    
    return(
        <>
            <h2>Dynamic Title Generator</h2>
            <input type="text" value={titles} placeholder="제목 입력하세요" onChange={change}></input>
            <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됨!!</p>
        </>
    )

}
import { useEffect, useState } from "react";

export default function Ex09(){

    const[msg,setMsg]=useState('');
    const[msgList,setMsgLIst]=useState([]);

    useEffect(()=>{
        if(msgList.length > 0){
            // 마지막에 입력된 메시지 출력
            let lastMsg=msgList[msgList.length-1];
            console.log('새 메시지: ' +lastMsg);
        }
        
    },[msg]);
    

    // 메시지 전송 함수
    const msgClick=()=>{
        
        if(msg.trim()==='') return; // return으로 종료시킴

        let msgListCopy=[...msgList];
        msgListCopy.push(msg);
        setMsgLIst(msgListCopy);
        setMsg(''); // 빈칸으로 리셋
        }

        const msgText=(e)=>{
        setMsg(e.target.value);
    }


    

    return(
        <>
            <h2>간단 메시지 입력기</h2>
            <input type="text" value={msg} onChange={msgText}></input>
            <button type="button" onClick={msgClick}>전송</button>
            <ul>
                {msgList.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )

};
import { useEffect, useState } from "react";

export default function Ex11(){

    const[name,setName]=useState('');
    const[age,setAge]=useState(0);

    useEffect(()=>{
        if(name.trim()){
            console.log('이름이 변경되었습니다.');
            return
        }
    },[name]);

    useEffect(()=>{
        if(age != 0){
            console.log('나이가 변경되었습니다.');
            return
        }
    },[age]);
    

    const nameChange=(e)=>{
        setName(e.target.value);
    }
    const ageChange=(e)=>{
        setAge(e.target.value);
    }

    return(
        <div>
            <input type="text" onChange={nameChange} placeholder="이름 입력"></input>
            <input type="number" onChange={ageChange} placeholder="나이 입력"></input>
        </div>
    )

};
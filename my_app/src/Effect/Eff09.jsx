import {useEffect, useState} from 'react'

export default function Eff09(){
    // 사용자의 목록을 담을 변수
    const[user,setUser]=useState([]);
    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/posts")
        
        .then(res => res.json())
        
        .then(data => setUser(data))
        
    },[])
    console.log(user);

    // UI 그리기
    return(
        <>
            <h2>데이터 불러오기</h2>
            <ul> 
                {/* slice -> 0 ~ 5 번째까지 잘려서 갖고옴, splice -> 빼고 */}
                {user.slice(0,5).map((user)=>(
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>
        </>
        
    )
    
}
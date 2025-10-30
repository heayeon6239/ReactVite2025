import {useEffect, useState} from 'react'

export default function Eff08(){

    // reload: 버튼 클릭으로 새로고침 제어할 상태 변수
    const [reload,setReload]=useState(false);
    // isLoad : 데이터를 불러오는 중인지 여부를 확인할 상태 변수
    const [isload,setIsload]=useState(false);
    // 사용자의 목록을 담을 변수
    const[user,setUser]=useState([]);

        useEffect(()=>{
            setIsload(true) // 로딩 시작 상태 변경
            setTimeout(()=>{
                fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(data => {setUser(data) ; setIsload(false)})  // 가져온 데이터를 user 상태에 저장
            },3000);    
        },[reload]) // reload 값이 바뀔때마다 useEffect 재실행
                    // 다시말해, reload가 변경될 때마다 데이터를 다시 불러옴

            return(
                <>
                    {/* 버튼 클릭시 reload 상태를 반전 시켜 useEffect 재실행 유도 */}
                    <button type='button'
                    // reload 값 true <-> false
                    onClick={()=>{setReload(!reload);setIsload(true)}}
                    >다시 불러오기</button>
                    
                    {/* 로딩중 -> '로딩중...', 아니면 사용자 목록 출력 */}
                    {isload ? <p>로딩중....</p> :
                     <ul>
                        {user.map((user)=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul> }
                </>
            )
}
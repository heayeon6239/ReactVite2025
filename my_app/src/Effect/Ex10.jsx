import { useEffect, useState } from "react";

export default function Ex10(){

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'David', email: 'david@example.com' },
    ];

    const [findName,setFindName]=useState('');
    // 배열이름.filter((요소,인덱스,원본배열)=>{return 조건})
    // 조건에 만족하는 데이터 추출해서 -> 새로운 배열에 반환
    // 조건에 만족하지 않으면 -> 빈배열 반환
    const [findUser,setFindUser]=useState([]);

    useEffect(()=>{
        // 검색어가 없으면 전체 사용자가 표시 되도록 예외처리
        // 스페이스바로 인한 공백이 입력된 경우에도 users목록이 출력되도록 예외처리
        // trim() =>왼쪽, 오른쪽 공백제거
        if(!findName.trim()){ // findName.trim() === false -> true
            setFindUser(users);
            // return
        }

        const nameFilter=users.filter((userItem)=>userItem.name.toUpperCase().includes(findName.toUpperCase()));
        setFindUser(nameFilter);
    },[findName])

    const inputFind=(e)=>{
        setFindName(e.target.value);
    }

    return(
        <>
            <h2>간단 사용자 검색</h2>
            <input type="text" value={findName} onChange={inputFind}></input>
            <ul>
                {findUser.map((item)=>(
                    <li key={item.id}>
                        <span>{item.name}/{item.email}</span>
                    </li>
                ))}
            </ul>
            {/* 검색 결과 존재하지 않을 때 */}
                {findUser.length === 0 && <p>검색결과가 존재하지 않습니다</p>}
        </>
    )

};
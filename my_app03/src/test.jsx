import { useEffect } from "react";
// 반드시 axios는 import해야함
import axios from 'axios';
import { useState } from "react";

export default function Test(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        // load라는 비동기 함수를 만들어서 API 요청 (load는 작명 가능)
        const load = async()=>{
            try{
                // axios.get()을 이용해 API 호출
                // ★ 공식 : async() ~~~~ await axios.get(URL)
                const res = await axios.get('https://dummyjson.com/products')
                console.log(res.data);
                setData(res.data.products);
            }catch(err){
                console.log('상품데이터 호출 실패',err)
            }finally{
                // 로딩이 성공, 실패 무조건 실행
                console.log('요청 성공')
            }
        }
        // ★ 내장된 라이브러리가 아니기 때문에 반드시 작성한 함수 호출
        load();
    },[])

    return(
        <>
            <ul>
                {data.map((item)=>(
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
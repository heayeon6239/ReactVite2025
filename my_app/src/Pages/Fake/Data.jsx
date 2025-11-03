import {useState, useEffect} from 'react';

// 커스텀 훅 => 훅을 제조해서 만든 훅 useProduct()
// 커스텀 훅 안에 useState, useEffect, fetch()만으로 구성된 함수
export default function useProduct(){

    const[data,setData]=useState([]);

    useEffect(()=>{

        console.log('데이터 요청 시작');
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('json으로 받아온 데이터',data);
            setData(data)
        })
        .finally(()=>{
            console.log('요청 완료')
        })

    },[]);

    // JSON에서 받아온 data 상태변수를 return을 이용하여 반환하여준다.
    return data;
}
import {useState,useEffect} from 'react'

export default function useFoodData(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        console.log('데이터 시작')
        fetch('https://dummyjson.com/recipes')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data);
            setData(data.recipes);
        })
        .finally(()=>{
            console.log('완료');
        })
    },[]);

    return data;
}
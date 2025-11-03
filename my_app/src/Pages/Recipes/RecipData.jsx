import {useState,useEffect} from 'react';


export default function useRecipeData(){
    
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        
        console.log('데이터 요청 시작')
        fetch('https://dummyjson.com/recipes')
        .then((res)=>{
            if(!res){
                throw new Error(`에러 ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log('가져온 데이터',data)
            setData(data.recipes)
        })
        .catch((err)=>{console.log("오류",err.message)})
        .finally(()=>{
            console.log('요청 완료')
        })
    },[]);

    return data;
}
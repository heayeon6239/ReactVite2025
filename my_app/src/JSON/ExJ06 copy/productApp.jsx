import { useEffect,useState } from "react";
// import productItem from '../ExJ06/productItem';
import ProductList from '../ExJ06/productList';
import '../ExJ06/productApp.css';

export default function ProductApp(){

    const[data,setData]=useState([]);

    useEffect(()=>{
        console.log('데이터 요청 시작')
        fetch('https://jsonplaceholder.typicode.com/photos')

        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('가져온 데이터',data);
            setData(data)
        })
        .finally(()=>{
            console.log('요청 완료')
        })

    },[]);

    return(
        <div className="all">
            <h2>상품 목록</h2>
            <ul>
                {data.slice(0,19).map((item)=>(
                    <ProductList item={item}/>
                ))}
            </ul>
        </div>
    )
}
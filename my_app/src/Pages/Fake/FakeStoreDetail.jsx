import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';

export default function FakeStoreDetail({data}){

        const {id}=useParams();
        // 현재 useParams()으로 받아온 id가 props로 받은 data와 같은 id가 존재하는지 찾아야함
        const product=data.find((item)=>item.id===Number(id))

        // const[data,setData]=useState(null);
        // product = null -> 데이터 안받음
        // product !== null -> 데이터 받음
        
        // React에서의 코드 표현 방식
        if(!product) return <p>데이터 불러오는 중...</p>

    return(
        <>
            
                {product !== null && product !== undefined ?(
                <div>
                    <h1>상품 상세 보기</h1>
                    <h2>{product.title}</h2>
                    <img src={product.image}/>
                    <p>{product.title}</p>
                    <span>{product.price} $ / ★ {product.rating.rate}</span>
                        
                <Link to='/'>상품 목록으로 이동</Link>
                </div>):null
                }
            
        </>
    )
}
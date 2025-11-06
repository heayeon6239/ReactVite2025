import {useState,useEffect} from "react";
import { useContext } from "react";
import { Wishlist } from "./WishlistContext";

import { Link } from "react-router-dom";

export default function ProductList(){

    const {addToWishlist,wishlist}=useContext(Wishlist);

    // 상품 배열
    const products = [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 80000 },
    ];

    // 찜하기 누르면 하트색 변하기
    const [like,setLike]=useState(false);

    const clickChange=(id)=>{
        
    }  
    

    // 상품 보기 <-> 상품 목록 보기 버튼 변경
    const [wishBtn,setWishBtn]=useState(false);

    const changeBtn=()=>{
        setWishBtn(!false);
    }

    return(
        <div>
            <h1>찜하기 예제</h1>
            <Link to='/wish'>
                <button type="button">찜 목록 보기</button>
            </Link>
            
            
            
            <ul>
                {products.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}
                        <button type="button" onClick={()=>addToWishlist(item)}>찜하기</button>
                    </li>
                ))}
            </ul>
            <p>현재 찜한 상품 수 : {wishlist.length}개</p>
        </div>
    )
    
}
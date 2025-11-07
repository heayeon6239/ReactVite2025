import {useState,useEffect} from "react";
import { useContext } from "react";
import { wishlistContext } from "./WishlistContext";
import { Link } from "react-router-dom";

// 임시로 사용할 상품 배열 (전역)
const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '마우스', price: 30000 },
    { id: 3, name: '키보드', price: 80000 },
];

export default function ProductList(){

    const {addToWishlist,removeFromWishlist,isInWishlist,wishlist,del}=useContext(wishlistContext);

    return(
        <div style={{padding:'20px'}}>
            <h2>상품 목록</h2>
            <ul>
                {products.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price.toLocaleString()}
                        <button type="button" 
                        // 현재 상품이 찜 목록에 존재하는지 확인, 존재:true 존재X:false
                        onClick={()=>isInWishlist(item.id)?removeFromWishlist(item.id):addToWishlist(item)}>
                            {isInWishlist(item.id)?'❤ 찜 해제':'🤍 찜하기'}
                        </button>
                    </li>
                ))}
            </ul>
            <p>현재 찜한 상품 수 : {wishlist.length}개</p>
            <button type="button" onClick={del}>전체삭제</button>
        </div>
    )
    
}
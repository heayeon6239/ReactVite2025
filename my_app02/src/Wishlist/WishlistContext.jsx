import { useState} from "react";
import { createContext } from "react";


// 데이터 저장소 생성
export const Wishlist = createContext();

// provider 생성
export default function WishProvider({children}){

    // 상품 배열
    const products = [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 80000 },
    ];

    // 현재 찜 목록 배열 상태
    const [wishlist,setWishlist]=useState([]);

    // 찜 추가 함수
    const addToWishlist=(item)=>{
        let wishlistCopy=[...wishlist];
        const find=products.filter((findItem)=>findItem.id===item.id);
        if(find===item.id){
            wishlistCopy.push({id:item.id, name:item.name, price:item.price});
            setWishlist(wishlistCopy);
        }
        
    }
    // 찜 제거 함수
    const removeFromWishlist=(id)=>{
        let wishlistCopy=[...wishlist];
        wishlistCopy.splice(id,1);
        setWishlist(wishlistCopy);
    }

    // 이미 찜된 항목인지 확인하는 함수
    const isInWishlist=(id)=>{
        let wishlistCopy=[...wishlist];
        const findId=wishlistCopy.find((item)=>item.id===id);
        if(findId===id) return alert('이미 찜된 항목입니다.');
    }
    console.log(wishlist);

    return(
        <Wishlist.Provider value={{addToWishlist,removeFromWishlist,isInWishlist,wishlist}}>
            {children}
        </Wishlist.Provider>
    )

}
// createContext() => 공유 데이터를 저장하는 저장소 생성 함수
import { createContext } from "react";
// 상태 변수
import {useState} from "react";


// 01. 공유 데이터 저장소 생성 (반드시 export) -> 생성자 함수
export const wishlistContext = createContext();

// 02. provider(공급자) 생성 -> 데이터를 공급하는 컴포넌트
export default function WishlistProvider({children}){


    // (1) 현재 찜 목록 배열 상태변수 정의 (초기값은 빈배열)
    const [wishlist,setWishlist]=useState([]);


    // (2) 찜 추가 함수 생성 ( 조건 - 이미 같은 id를 가진 상품이 존재하면 중복 추가 X)
    const addToWishlist=(product)=>{
        // - 중복을 피하기위해 같은 id가 존재하는지 유무
        //   배열.find() => 찾는 항목이 존재하면 오브젝트 배열 !!!!
        //               => 찾는 항목이 없으면 undefinded' !!!!
        const listFind=wishlist.find((item)=>item.id===product.id);
        // - listFind에 같은 id가 존재하면 찜 추가 X
        if(listFind===undefined){
            let wishlistCopy=[...wishlist];
            wishlistCopy.push(product); // 내가 선택한 항목 {id:1, name:마우스, price:3000}
            setWishlist(wishlistCopy);
        }
    }
    console.log(wishlist);


    // (3) 찜 제거 함수
    //     filter() 이용해서 id가 다른 항목만 남겨서 업데이트하는 기능 (같은 id는 숨김)
    const removeFromWishlist=(id)=>{
        setWishlist(wishlist.filter((item)=>item.id !== id))
    }


    // (4) 이미 찜된 항목인지 확인하는 함수 (해당 id의 상품객체가 존재하면 true, 없으면 false 반환)
    //     find() 이용
    const isInWishlist=(id)=>{
        // wishlist 배열에서 id가 일치하는 상품을 찾음
        const findItem=wishlist.find((item)=>item.id===id);
        // 찾는 상품이 존재하면 findItem은 객체(object), 없으면 undefinded
        if(findItem !== undefined){ // id 존재
            // 상품이 이미 찜 목록에 있음 -> true
            return true;
        }else{
            // 상품이 찜 목록에 없음 -> false
            return false;
        }
    }

    return(
        <wishlistContext.Provider value={{addToWishlist,removeFromWishlist,isInWishlist,wishlist}}>
            {children}
        </wishlistContext.Provider>
    )

}
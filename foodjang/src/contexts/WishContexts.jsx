import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

// 01. 공용 데이터 저장소 생성 (반드시 export 내보내기 해야함)
export const wishContext=createContext();

// 02. provider 함수 생성
export default function WishProvider({children}){

    // 현재 찜 목록 빈 배열
    // const [wishlist,setWishlist]=useState([]);

    // < 로컬 스토리지에 위시리스트 저장 >
    const [wishlist,setWishlist]=useState(()=>{
        const saved=localStorage.getItem('wishlist');
        return saved? JSON.parse(saved):[];
    });

    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
    },[wishlist]);

    // 찜 추가 함수 생성
    const addWish=(product)=>{
        // find() => 찾는 항목이 존재하면 오브젝트 배열, 없으면 undefinded
        const addfind=wishlist.find((item)=>item.id===product.id);
        if(addfind === undefined){
            let WishlistCopy=[...wishlist];
            WishlistCopy.push(product);
            setWishlist(WishlistCopy);
        }
    }
    console.log(wishlist);

    // 찜 삭제 함수 생성
    // (삭제 함수가 작동될 때는 위시리스트와 비교해서 존재하지 않는 id만 filter()함수로 고르기 )
    const delWish=(id)=>{
        setWishlist(wishlist.filter((item)=>item.id !==id))
    }

    // 찜버튼 하트 색 바꾸기
    const isWish=(id)=>{
        const findId=wishlist.find((item)=>item.id===id);
        // 찜 목록에 없으면
        if(findId !==undefined){
            return true;
        // 찜 목록에 있으면
        }else{
            return false;
        }
    }

    return(
        <wishContext.Provider value={{addWish,isWish,wishlist,delWish}}>
            {children}
        </wishContext.Provider>
    )
}
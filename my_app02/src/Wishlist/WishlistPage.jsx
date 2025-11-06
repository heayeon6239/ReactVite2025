import { useContext } from "react";
import { Wishlist } from "./WishlistContext";
import { Link } from "react-router-dom";

export default function WishlistPage(){

    const {removeFromWishlist,wishlist}=useContext(Wishlist);

    return(
        <div>
            <h1>찜하기 예제</h1>
            <Link to='/'>
                <button type="button">상품 보기</button>
            </Link>

            <h3>찜한 상품 목록</h3>
            <ul>
                {wishlist.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}
                        <button type="button" onClick={()=>removeFromWishlist(item)}>삭제</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
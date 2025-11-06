import { useContext } from "react";
import { wishlistContext } from "./WishlistContext";
import { Link } from "react-router-dom";

export default function WishlistPage(){

    const {removeFromWishlist,wishlist}=useContext(wishlistContext);

    return(
        <div>

            <h3>찜한 상품 목록</h3>
            {wishlist.length === 0 ? <p>찜 한 상품이 없습니다.</p>:
                <ul>
                    {wishlist.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.price}
                        <button type="button" onClick={()=>removeFromWishlist(item.id)}>삭제</button>
                    </li>
                    ))}
                </ul>
            }           
            
        </div>
    )
}
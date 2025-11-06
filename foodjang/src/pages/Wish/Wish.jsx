import { useContext } from "react"
import {Link} from "react-router-dom"
import { wishContext } from "../../contexts/WishContexts";
import '../Wish/Wish.css';

export default function Wish({data}){

    const {wishlist,delWish}=useContext(wishContext);

    return(
        <div className="wishAll">
            <h3>찜하기</h3>
            <div className="wishlist">
                {wishlist.length===0? <p className="none">찜하기 목록이 비어있습니다.</p>:
                    <ul>
                        {wishlist.map((item)=>(
                            <li key={item.id}>
                                <img src={data[item.id].image} alt={item.name}/>
                                <div className="text">
                                    <p className="title">{data[item.id].name}</p>
                                    <p>{data[item.id].cuisine}</p>
                                    <p>★ {data[item.id].rating}</p>
                                    <p>후기 {data[item.id].reviewCount}건</p>
                                </div>
                                <span onClick={()=>delWish(item.id)}>X</span>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}
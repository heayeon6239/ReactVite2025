import { useDispatch,useSelector } from "react-redux";
import { add } from "./CartSlice";

export default function Cart(){

    // 상품 목록
    const sampleProducts = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '오렌지', price: 1200 },
    ];

    // 상태 읽기
    const cartList= useSelector((state)=>state.counter.value)
    // 액션 실행 준비 (내보내기)
    const dispatch=useDispatch();
    
    return(
        <div>
            <h2>장바구니</h2>
            <h3>상품 목록</h3>
            <ul>
                {sampleProducts.map((item)=>(
                    <li key={item.id}>
                        <p>{item.name}-{item.price}원</p>
                        <button type="button" onClick={()=>dispatch(add())}>장바구니 추가</button>
                    </li>
                ))}
            </ul>
            <h2>장바구니</h2>
            <ul>
                {cartList.map((item)=>(
                    <li key={item.id}>
                        <p>{item.name}-{item.price}원</p>
                        <button type="button">삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
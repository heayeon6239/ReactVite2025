import { useDispatch,useSelector } from "react-redux";
import { add,remove,reset } from "./CartSlice";

export default function Cart(){

    // 상품 목록
    const sampleProducts = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 1500 },
        { id: 3, name: '오렌지', price: 1200 },
    ];

    // 01. 상태 읽기
    const cartList= useSelector((state)=>state.cart.items)
    // 02. 액션 실행 준비 (내보내기)
    const dispatch=useDispatch();
    
    return(
        <div>
            <h2>장바구니</h2>
            <h3>상품 목록</h3>
            <ul>
                {sampleProducts.map((item)=>(
                    <li key={item.id}>
                        <p>{item.name}-{item.price}원</p>
                        <button type="button" onClick={()=>dispatch(add(item))}>장바구니 추가</button>
                        {/* add(state,actions) -> 매개변수 입력했기때문에 item넣어줘야함 */}
                        {/* cart -> store -> cartSlice , store를 통하지 않고는 이동할 수 없음 !! */}
                    </li>
                ))}
            </ul>
            <h3>장바구니 추가</h3>
            <ul>
                {cartList.map((item,index)=>(
                    <li key={index}>
                        <p>{item.name}-{item.price}원</p>
                        <button type="button" onClick={()=>dispatch(remove(item.id))}>삭제</button>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={()=>dispatch(reset())}>장바구니 비우기</button>
        </div>
    )
}
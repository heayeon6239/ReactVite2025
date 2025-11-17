import { plus,remove,reset,minus } from '../store02/cartSlice'; 
import { useDispatch,useSelector } from 'react-redux';
import '../pages/cartPage.css';
import { useEffect,useState } from 'react';

export default function CartPage(){

    // 상태 읽기
    const cartList=useSelector((state)=>state.cart02.items)
    // 내보내기
    const dispatch=useDispatch();

    // 합계
    // const total=()=>{
    //     for(let i=0; i=cartList.length;i++){
    //         let totalPay= totalPay+ cartList[i].price;
    //     }
    // }
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        let totalTemp=0
            for(let i=0; i<cartList.length;i++){
                totalTemp += cartList[i].price * cartList[i].quantity
            }
            setTotal(totalTemp);
    },[cartList])

    return(
        <div className='all'>
            <h3>장바구니</h3>
            {cartList.length === 0? <h3>장바구니가 비었습니다.</h3>:
            <ul>
                {cartList.map((item)=>(
                    <div className='list' key={item.id}>
                    <li >
                        <img src={item.images[0]} alt={item.title}/>
                        <span>{item.title} - {item.quantity}개 - {item.quantity * item.price}원</span>
                        <button type='button' onClick={()=>{dispatch(remove(item.id))}}>삭제</button>
                        <button type='button'onClick={()=>dispatch(minus(item.id))}>-</button>
                        <button type='button' onClick={()=>dispatch(plus(item.id))}>+</button>
                    </li>
                    
                    </div>
                ))}
            </ul>}
            <h3>총 합계 : {total} $</h3>
            <button type='button' onClick={()=>dispatch(reset())}>전체 항목 삭제</button>
        </div>
    )
}
export default function CartModal(props){
    // 장바구니 모달에서 +/- 증가 감소 기능 함수 (index필요)
    const plus=(index)=>{
        let cartCopy=[...props.cart]
        if(cartCopy[index].quantity<10){
            cartCopy[index].quantity+=1;
            props.setCart(cartCopy);
        }else{
            alert('10개까지만 가능');
        }
        
    }
    const minus=(index)=>{
        let cartCopy=[...props.cart]
        if(cartCopy[index].quantity>1){
            cartCopy[index].quantity-=1;
            props.setCart(cartCopy);
        }else{
            alert('1개부터 가능');
        }
        
    }

    return(
        <>
            <h3>장바구니</h3>
            {/* 장바구니가 비어있으면 '비어있습니다'
                아니면 랜더해서 그리기 */}
            {props.cart.length === 0? <p>'비어있습니다.</p>
            : <ul>
                {props.cart.map((cartItem,index)=>(
                    <li key={cartItem.id}>
                        <span>{cartItem.name}</span>
                        <button type="button" onClick={()=>minus(index)}>-</button>
                        <span>{cartItem.quantity}</span>
                        <button type="button" onClick={()=>plus(index)}>+</button>
                    </li>
                ))}
             </ul>}
             <button type="button" onClick={props.onClose}>닫기</button>
        </>
    )
}
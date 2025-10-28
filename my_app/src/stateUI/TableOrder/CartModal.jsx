export default function CartModal(props){
    return(
        <div>
            <h2>주문내역</h2>
            {props.orderCart.length===0 ?<p>비어있음</p>:
                <ul>
                    {props.orderCart.map((cartItem,index)=>(
                        <li key={cartItem.id}>
                            <button type="button">X</button>
                            <p>{cartItem.name} - {cartItem.quantity}개</p>
                            <span><strong>{cartItem.price}</strong>원</span>
                            <button type="button" onClick={()=>props.minus(index)}>-</button>
                            <button type="button" onClick={()=>props.plus(index)}>+</button>
                        </li>          
                    ))}
                </ul>
            }
            
            <button type="button" onClick={()=>props.setShowCart(false)}>닫힘</button>
        </div>
    )
}
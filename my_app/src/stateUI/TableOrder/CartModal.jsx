export default function CartModal(props){


    return(
        <div className="modalOverlay">
            <div className="modal">
                <h2>주문내역</h2>
                {props.orderCart.length===0 ?<span className="none">비어있음</span>:
                    <ul>
                        {props.orderCart.map((cartItem,index)=>(
                            <li key={cartItem.id}>
                                <div className="left">
                                    <p className="left_title">{cartItem.name} - {cartItem.quantity}개</p>
                                    <p><strong>{(cartItem.price * cartItem.quantity).toLocaleString()}</strong>원</p>
                                </div>
                                <div className="right">
                                    <button type="button" onClick={()=>props.minus(index)}>
                                       <span>-</span> 
                                    </button>
                                    <button type="button" onClick={()=>props.plus(index)}>
                                        <span>+</span>
                                    </button>
                                    <button type="button" onClick={props.delOrder01}>
                                        <span className="del">x</span>
                                    </button>
                                </div>
                                
                            </li>          
                        ))}
                    </ul>
                }
                {props.orderCart.length != 0 ? <p>총 금액 : <span>{props.totalPrice} 원</span></p>:null}
                <button type="button" onClick={()=>props.setShowCart(false)}><span>닫힘</span></button>
            </div>
        </div>
    )
}
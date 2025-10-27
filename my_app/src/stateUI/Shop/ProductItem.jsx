export default function ProductItem(props){
    return(
        <li key={props.products.id}>
            <span>{props.products.name}-{props.products.price}원</span>
            <button type="button" onClick={()=>{props.addCart(props.products)}}>담기</button>
        </li>
    )
}
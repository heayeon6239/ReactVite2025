export default function ProductList(props){
    return(
        <>
            <li key={props.item.id}>
                <img src={props.item.img} alt="img"/>
                <p>{props.item.title}</p>
                <p>{props.item.price}원</p>
            </li>
        </>
    )
}
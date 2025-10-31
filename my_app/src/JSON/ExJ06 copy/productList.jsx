export default function ProductList(props){
    return(
        <>
            <li key={props.item.id}>
                <img src={`https://picsum.photos/150?random=${props.item.id}`} alt="img"/>
                <p>{props.item.title.slice(0,15)}</p>
                <p>{(props.item.id*1200).toLocaleString()}원</p>
            </li>
        </>
    )
}
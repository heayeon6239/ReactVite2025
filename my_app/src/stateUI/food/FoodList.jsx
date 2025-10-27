export default function FoodList(props){
    return(
        <>
            <li key={props.foodItem.id}>
                <span>{props.foodItem.name}:{props.foodItem.price}</span>
                <button type="button" onClick={()=>props.addCart(props.foodItem)}>담기</button>
            </li>
        </>
    )
}
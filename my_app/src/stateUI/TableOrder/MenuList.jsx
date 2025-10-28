export default function MenuList(props){
    return(
        <>
                <li className="menu_li">
                    <img src={`/images/${props.menuItem.img}`} alt={props.menuItem.name}/>
                    <p>{props.menuItem.name}</p>
                    <p>{props.menuItem.price}</p>
                    <button type="button" onClick={()=>props.addCart(props.menuItem)}>담기</button>
                </li>

        </>
    )
}
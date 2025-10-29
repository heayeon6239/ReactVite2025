import {useState} from 'react';

export default function MenuList(props){

    const [isHovered,setIsHovered]=useState(false);

    return(
        <>
                <li style={{ width:'190px',margin:'20px 10px',
                 borderRadius:'10px',boxShadow:'3px 3px 7px rgba(0,0,0,0.1)'}} 
                className="menu_li">
                    {/* 메뉴 이미지 */}
                    <img style={{width:'190px', height:'190px',backgroundColor:'#fff',
                     borderRadius:'10px 10px 0 0'}} 
                    src={`/images/${props.menuItem.img}`} alt={props.menuItem.name}/>
                    {/* 메뉴 이름, 가격 */}
                    <p style={{fontWeight:500}}>{props.menuItem.name}</p>
                    <p>{props.menuItem.price.toLocaleString('ko-KR')} 원</p>
                    {/* 담기 버튼 */}
                    <button  
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                    className="closeBtn" 
                    style={{backgroundColor:isHovered ? 'rgba(160, 207, 107, 1)':'rgba(206, 206, 206, 1)', width:'100%',borderRadius:'0 0 10px 10px'}} 
                    type="button" onClick={()=>props.addCart(props.menuItem)}>담기</button>
                </li>

        </>
    )
}
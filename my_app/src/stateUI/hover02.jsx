import {useState} from 'react'

export default function Hover02(){
    // isHovered = false 면 tooltip 안보임
    const [isTooltip,setIsTooltip]=useState(false)

    

    return(
        <div>
            <button type='button' 
            onMouseEnter={()=>setIsTooltip(true)}
            onMouseLeave={()=>setIsTooltip(false)}>마우스를 올려보세요</button>
            {/* isTooltip = true 면 실행, false 면 null */}
            {isTooltip && <div>도움말 메시지</div>}
            {isTooltip ? <div>도움말 메시지</div> : null}
            {/* <div style={{display:isTooltip?'block':'none'}}>도움말 메시지</div> */}
        </div>
    )
}
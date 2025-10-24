import {useState} from 'react'

// 부모
export default function Parent(){
    
    const [open,setOpen]=useState(false);

    return(
        <div>
            {/* 자식한테 보내야 하는 기능 */}
            <Child
                onToggle={()=>setOpen(true)}
            />

            {open && 
                <div>
                    <h2>모달창입니다.</h2>
                    <button onClick={()=>setOpen(false)}>닫기</button>
                </div>
            }
        </div>
    )
}

// 자식
function Child(props){
    return(
        <>
            <button onClick={props.onToggle}>모달열기</button>
        </>
    )
}
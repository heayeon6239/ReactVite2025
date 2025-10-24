import {useState} from 'react'

// React에서는 화면 상태도 데이터로 관리
export default function ModalChange(){
    // 현재 모달 닫힘 (false)
    // isOpen = false
    const [isOpen,setIsOpen]=useState(false);

    return(
        // 프래그넌트 안에 두개 div 안됨/ 한 div로 묶어줘야함
        <>
            <button onClick={()=>setIsOpen(true)}>모달열기</button>
            {isOpen && <div>모달 내용</div>}
            {isOpen && <button onClick={()=>setIsOpen(false)}>닫기</button>}

            {/* <div>
                <p style={{fontSize:big+'px'}}>커지는 글씨!</p>
                <button onClick={()=>setBig(big+5)}>크게</button>
            </div> */}
        </>
    )
}
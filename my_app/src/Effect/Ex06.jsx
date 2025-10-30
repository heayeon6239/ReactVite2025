import { useEffect, useState } from "react";

// 부모
export default function Ex06(){

    const[open,setOpen]=useState(false);

    
    
    const change=()=>{
        setOpen(!open);
    };
    // const change_T=()=>{
    //     setOpen(true);
    // };
    // const change_F=()=>{
    //     setOpen(false);
    // };

    return(
        <>
            <h2>Lifecycle Demo</h2>
            {open && <ChildEx06 setOpen={setOpen} open={open}/>}
            <button type="button" onClick={change}>
                {open? '컴포넌트 숨기기':'컴포넌트 보기'}
            </button>
            
            <p>컴포넌트 마운트/언마운트 메시지가 출력됨</p>
        </>
    )

}

// 자식
function ChildEx06(props){

    useEffect(()=>{
        props.setOpen(true);
        console.log('컴포넌트 마운트');

        return ()=>{console.log('컴포넌트 언마운트')};
    },[props.open]);

    return(
        <>
            <p>안녕하세요! 저는 토글 가능한 컴포넌트입니다!</p>
        </>
    )
}
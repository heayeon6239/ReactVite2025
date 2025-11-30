import cookie from "js-cookie";
import { useState,useEffect} from "react";

export default function Kulry(){

    // 01. 상태변수 생성
    const inputCheck=cookie.get('close')
    console.log(inputCheck);
    const [check,setCheck]=useState(inputCheck?true:false);

    // 02. 체크박스 변경 핸들러
    const checkChange=(e)=>{
        setCheck(e.target.checked)
    }

    // 03. 닫기 핸들러 (안보기 체크되어있는지 안되어있는지 T/F)
    const [close,setClose]=useState(inputCheck);
    const closeHandeler=(e)=>{
        e.preventDefault();
        // 체크표시 O
        if(check){
            const tenmin=new Date(Date.now()+1*60*1000)
            cookie.set('close','none',{expires:tenmin,path:'/'})
            setClose('none');
        // 체크표시 X
        }else{
            cookie.remove('close',{path:'/'})
            setClose('block');
        }
    }


    return(
        <div style={{display:close}}>
            <form onSubmit={closeHandeler}>
                <p>오직 앱에서만 가능한 첫 구매 혜택</p>
                <h3>지금 가입하고 첫 구매하면 최대 15000원 할인!</h3>
                <input type="checkbox" onClick={checkChange}/><label>10분동안 안보기</label>
                <button type="submit">닫기</button>
            </form>
        </div>
    )
}
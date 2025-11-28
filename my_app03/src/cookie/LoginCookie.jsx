import cookie from 'js-cookie';
import { useState} from 'react';

export default function LoginCookie(){

    // 01. 상태변수 생성
    // id, pw, checkbox의 inputbox에 입력되는 값이 저장되는 상태저장 변수
    const [userId,setUserId]=useState(cookie.get('userId') || '');
    const [userPw,setUserPw]=useState('');
    // ★ 아이디 저장 체크박스가 체크되면 => 아이디 저장 (T/F 이용)
    const saveId = cookie.get('userId')
    const [idCheck,setIdCheck]=useState(saveId?true:false);
    
    // 02. 아이디 저장 체크박스 변경 핸들러
    const idCheckHandeler=(e)=>{
        setIdCheck(e.target.checked)
    }

    // 03. 로그인 버튼 클릭하는 핸들러
    // <form>안에 로그인 버튼을 클릭하면 기본으로 페이지가 새로고침됨
    // 새로고침이 되면 react 상태가 모두 초기화 -> 화면에 input값과 체크박스 상태도 모두 사라짐
    // 위 오류 해결방법 => e.preventDefault() !!!
    const loginHandeler = (e) =>{
        e.preventDefault(); // 폼의 기본 제출 동작을 막음
        // 1분뒤 cookie 만료
        if(idCheck){
            const oneMin=new Date(Date.now()+1*60*1000)
            cookie.set('userId', userId, oneMin, {expires:oneMin,path:'/'})
            
        }else{
            // 아이디 저장 체크가 안되어 있으면 cookie 삭제
            cookie.remove('userId',{path:'/'})
            setUserPw('')
            setUserId('')
        }
        alert(`로그인 시도: ${userId}`)
    }

    return(
        <div>
            <h2>NAVER</h2>
            <form onSubmit={loginHandeler}>
                <input type='text' placeholder='아이디' id="userId" name="userId" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                <input type='password' placeholder='비밀번호' value={userPw} onChange={(e)=>setUserPw(e.target.value)}/>
                <input type='checkbox' onClick={idCheckHandeler}/><label>아이디 저장</label>
                <button type='submit'>로그인</button>
            </form>
        </div>
    )
}

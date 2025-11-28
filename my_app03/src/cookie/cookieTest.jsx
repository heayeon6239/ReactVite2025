import cookie from 'js-cookie';
import {useState} from 'react';

export default function CookieTest(){
    // 01. cookie를 읽어와서 cookievalue 상태변수에 저장
    // cookie에서 값을 읽어오는 명령어 cookie.get('key')
    // 쿠키가 1분 뒤에 자동삭제되면 홍길동이 화면에서 사라지게 하려면
    // cookie.get('userName') || ''
    const [cookieValue,setCookieValue]=useState(cookie.get('userName') || '');
    console.log(cookieValue);
    // 02. cookie를 저장하는 함수 생성
    const cookieSave = () =>{
        // cookie의 값을 저장할 때 명령어 cookie.set(key, value, {expires})
        // cookie의 값을 저장할 때 명령어 cookie.set(키, 값, 만료시간)
        // {expires:1} -> 1일동안 유지(=24h)
        // Q : 1분 동안만 userName이 유지되도록 변경
        // 1초 = 1000ms, 1분 = 60초, 고로 1분 = 60 * 1000
        const oneMin = new Date(Date.now()+1*60*1000)
        cookie.set('userName','홍길동',{expires:oneMin,path:'/'})
        // cookie.set('userName','홍길동', {expires:1});
        setCookieValue('홍길동');
        alert('쿠키 저장됨')
    }

    // 03. cookie 확인하는 함수 생성
    const cookieCheck = ()=>{
        // cookie.get()은 값이 없으면 undefined를 반환
    
        const value = cookie.get('userName');
            console.log(value)
        if(value !== undefined){
            // cookie에 저장된 값이 존재
            alert(`쿠키 ${value}`)
        }else{
            alert('쿠키가 없습니다.')
            setCookieValue('')
        }
    }

    // 04. cookie 삭제하는 함수 생성
    const cookieDel=()=>{
        // cookie.remove('key')
        cookie.remove('userName')
        setCookieValue('')
        alert('쿠키가 삭제되었습니다.')
    }

    return(
        <div>
            <h2>쿠키 예제</h2>
            <p>현재 쿠키 값: {cookieValue}</p>
            <button type='button' onClick={cookieSave} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 저장</button>
            <button type='button' onClick={cookieCheck} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 확인</button>
            <button type='button' onClick={cookieDel} style={{backgroundColor:'dodgerblue',color:'#fff'}}>쿠키 삭제</button>
        </div>
    )
}
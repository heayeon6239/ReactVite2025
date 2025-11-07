import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
// useNavigate import함
import {useNavigate} from "react-router-dom";

export default function LoginPage(){
    // id, pw 상태 변수 생성
    const[id,setId]=useState('');
    const[pw,setPw]=useState('');

    const {login}=useContext(AuthContext);

    // useNavigate 훅을 변수로 지정
    const navigate = useNavigate();

    // id = 'admin'이면서 pw = '1234' -> alert('로그인 성공') -> home페이지로 이동
    // 아니면 'id, pw 확인하세요.'
    const idPw=()=>{
        if(id==='admin' && pw==='1234'){
            alert('로그인 성공');
            // 논리 구현 함수 안에 <Link to={}> 사용 금지
            navigate('/home'); // home페이지로 이동
            // 단, history에 페이지가 존재해야 이동이 가능
            //navigate(-1); // 현재 페이지보다 하나 뒤 페이지로 이동
            //navigate(1); // 현재 페이지보다 하나 앞 페이지로 이동
            //navigate(0); // 페이지 새로 고침
            login(id);
        }else{
            alert('id, pw를 확인하세요.');
        }
    }

    return(
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)}></input>
            <button type="button" onClick={idPw}>로그인</button>
        </div>
    )
}
import {useState} from "react";
import LoginForm from "../member/LoginForm";
import Message from "../member/Message";
import SignUpForm from "../member/SignUpForm";

// 부모 컴포넌트로 회원가입 상태, msg만 관리함
export default function AuthApp(){
    const[isLogin,setIsLogin]=useState(true)
    const[msg,setMsg]=useState('')

    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>로그인/회원가입🍔</h2>
                <Message mssg={msg}/>
                {/* 회원가입하고 회원가입 버튼을 클릭하면 */}
                {/* '회원가입 완료! {name}님 */}
                {/* 로그인이 완료되면 : '환영합니다! {name}님 */}
                {isLogin? <LoginForm onSuccess={(name)=>setMsg(`환영합니다! ${name}님`)}/>
                 : <SignUpForm onSuccess={(name)=>setMsg(`회원가입 완료! 환영합니다. ${name}`)}/>
                }
                <button onClick={()=>{setIsLogin(!true);setMsg('');}}>{isLogin?'회원가입하기':'로그인'}</button>
            </div>
        </>
    )
}
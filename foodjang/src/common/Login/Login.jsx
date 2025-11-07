import {useState} from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./LoginContent";
import '../Login/Login.css';
import {useNavigate} from "react-router-dom";


export default function Login(){

    const {login}=useContext(LoginContext);
    
    const navigate = useNavigate();

    const [id,setId]=useState('');
    const [pw,setPw]=useState('');


    // // 아이디/ 비밀번호 핸들러
    const submitHandeler=()=>{
        if(id ==='admin' && pw ==='1234'){
            alert('로그인 성공');
            login(id);
            navigate('/home');
        // }if(id==='' || pw===''){
        //     alert('id,pw를 입력해 주세요.');
        }else{
            alert('id와 pw를 확인해주세요.');
        }
        console.log('사용자 이름',login(id))
    }

    

    return(
        <section>
            <h4 className="title">로그인</h4>
            <div className="loginAll">
                <p className="loginTitle">회원 로그인</p>
                {/* 회원 로그인 */}
                <div className="logPart">
                        {/* <form onSubmit={submitHandeler}> */}
                        <div className="log">
                            <div className="inputPart">
                                <input  className="id" type="text" placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)} />
                                <input type="text" placeholder="비밀번호" value={pw} onChange={(e)=>setPw(e.target.value)} />
                            </div>
                            <button className="logBtn" type="submit" onClick={submitHandeler}>로그인</button>
                        </div>
                    <div className="check">
                        <input type="checkbox"  id="idCheck"/>
                        <label for="idCheck">아이디 저장</label>
                    </div>
                </div>
                
                

                <button type="button">카카오톡으로 회원가입/로그인</button>
                <div className="btns">
                    <button type="button" className="join">회원가입</button>
                    <button type="button">아이디 찾기</button>
                    <button type="button">비밀번호 찾기</button>
                </div>
                {/* 비회원 주문조회 하기 */}
                {/* <div className="logPart">
                    <div className="logInput">
                        <form onSubmit={idHandeler}>
                            <input type="text" placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)}></input>
                        </form>
                        <form onSubmit={pwHandeler}>
                            <input type="text" placeholder="비밀번호" value={pw} onChange={(e)=>setPw(e.target.value)}></input>
                        </form>
                    </div>
                    <button type="button">로그인</button>
                </div> */}
                
                
            </div>
        </section>
    )
}
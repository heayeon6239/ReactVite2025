import {useState} from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import '../Login/Login.css';

export default function Login(){

    // 입력한 아이디 담을 변수
    const [id,setId]=useState(null);
    // 입력한 비밀번호 담을 변수
    const [pw,setPw]=useState(null);

    // 아이디/ 비밀번호 핸들러
    const idHandeler=(userId,userPw)=>{
        setId(userId);
        setPw(userPw);
    }
    

    console.log(id);
    console.log(pw);

    return(
        <section>
            <h4>로그인</h4>
            <div className="loginAll">
                <p className="loginTitle">회원 로그인</p>
                {/* 회원 로그인 */}
                <div className="logPart">
                    {/* <div className="logInput"> */}
                        <form onSubmit={idHandeler}>
                            <div className="inputPart">
                                <input type="text" placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)} />
                                <input type="text" placeholder="비밀번호" value={pw} onChange={(e)=>setPw(e.target.value)} />
                            </div>
                            <button className="logBtn" type="submit">로그인</button>
                        </form>
                    {/* </div> */}
                    <input type="checkbox"  id="idCheck"/><label for="idCheck">아이디 저장</label>
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
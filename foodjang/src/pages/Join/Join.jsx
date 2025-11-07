import {Link} from "react-router-dom";
import PostCode from "./Postcode";
import './join.css'

export default function Join(){
    return(
        <div className="joinAll">
            <h1>회원가입</h1>
            <form>
                <ul className="joinForm">
                    <li>
                        <label htmlFor="userId">아이디</label>
                        <input type="text" name="userId" id="userId"/>
                    </li>
                    <li>
                        <label htmlFor="userPw">비밀번호</label>
                        <input type="password" name="userPw" id="userPw"/>
                    </li>
                    <li>
                        <label htmlFor="userPwRe">비밀번호 확인</label>
                        <input type="password" name="userPwRe" id="userPwRe"/>
                    </li>
                    <li>
                        <label htmlFor="userName">이름</label>
                        <input type="text" name="userName" id="userName"/>
                    </li>
                    <li>
                        <label htmlFor="userTel">휴대폰 번호</label>
                        <input type="tel" name="userTel" id="userTel"/>
                    </li>
                    <li>
                        <label htmlFor="userEmail">이메일</label>
                        <input type="email" name="userEmail" id="userEmail"/>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <div className="address">
                    <PostCode/>
                </div>
                <button type="button" className="joinBtn">회원가입</button>
            </form>
        </div>
    )
}
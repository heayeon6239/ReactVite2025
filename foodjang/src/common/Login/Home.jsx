import { useContext } from "react";
import { LoginContext } from "./LoginContent";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const {user,logOut}=useContext(LoginContext);

    const navigate=useNavigate();

    const logOutHandeler=()=>{
        logOut();
        navigate('/login');
    }

    return(
        <div>
            <h2>Home</h2>
            {user?
                <>
                    <p>{user}님 환영합니다.</p>
                    <button type="button" onClick={logOutHandeler}>로그아웃</button>
                </>: <h2>로그인이 필요합니다.</h2>
            }
        </div>
    )
}
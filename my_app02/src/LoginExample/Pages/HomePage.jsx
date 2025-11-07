import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomePage(){

    const {user,logOut}=useContext(AuthContext);

    const navigate=useNavigate();

    const logOutHandeler=()=>{
        logOut();
        navigate('/');
    }

    return(
        <div>
            <h2>HomePage</h2>
            {user?
                <>
                    <p>{user}님 환영합니다.</p>
                    <button type="button" onClick={logOutHandeler}>로그아웃</button>
                </>: <h2>로그인이 필요합니다.</h2>
            }
        </div>
    )
}
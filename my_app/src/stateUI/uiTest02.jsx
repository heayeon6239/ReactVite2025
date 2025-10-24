import {useState} from 'react'

export default function LoginView(){
    // 로그아웃 상태임
    // isLogin = false
    const [isLogin,setIsLogin]=useState(false);

    return(
        <>
            {isLogin ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
            <button onClick={()=>setIsLogin(!isLogin)}>{isLogin ? '로그아웃':'로그인'}</button>
            {/* setIsLogin()이 죽음 => 위로 올라가서 setIsLogin()은 다시 false가 됨 => 반복됨
                setIsLogin(true)라고 쓰면 flase라고 바뀌지 않음 */}
        </>
    )
}
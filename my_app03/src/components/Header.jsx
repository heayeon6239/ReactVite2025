import { Link } from "react-router-dom";

export default function Header(){

    return(
        <div className="all" style={{display:'flex', justifyContent:'space-between',width:'100%',position:'fixed',top:0,left:0}}>
            <h3>Redux 쇼핑몰</h3>
            <div className="right">
                <Link to={'/'}><span>Home</span></Link>
                <Link to={'/cartList'}><span>Cart</span></Link>
                <span>Login</span>
            </div>
        </div>
    )
}
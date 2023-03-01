import React from "react";
import { Link } from "react-router-dom";
import  userImg  from '../../../assets/userImg.svg'
import { LoginButtonStyle } from "./LoginStyle"


const LoginButton = () =>  {

    return (
    <Link to='/Auth/Login'>
    <LoginButtonStyle>
    <img src={userImg} alt="user photo" />
    <p>Login/Sing Up</p>
    </LoginButtonStyle>
    </Link>
    )
    
}
export default LoginButton


import React from "react";
import  userImg  from '../../../assets/userImg.svg'
import { LoginButtonStyle } from "./LoginStyle"

const LoginButton = () =>  {

    return (
    <>
    <LoginButtonStyle>
    <img src={userImg} alt="user photo" />
    <p>Login/Sing Up</p>
    </LoginButtonStyle>
    </>
    )
    
}
export default LoginButton


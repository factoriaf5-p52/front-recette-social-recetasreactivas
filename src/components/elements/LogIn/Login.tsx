import React from "react";
import  userImg  from '../../../assets/userImg.svg'
import { LoginStyle } from "./LoginStyle"

const LoginButton = () =>  {

    return (
    <>
    <LoginStyle>
    <img src={userImg} alt="user photo" />
    <p>Login/Sing Up</p>
    </LoginStyle>
    </>
    )
    
}
export default LoginButton


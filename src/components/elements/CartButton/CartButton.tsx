import React from "react";
import  shoppingCart  from '../../../assets/shoppingCart.svg'
import { CartButtonStyle } from "./CartButtonStyle"

const CartButton = () =>  {

    return (
    <>
    <CartButtonStyle>
    <img src={shoppingCart} alt="user photo" />
    <p>Shopping List</p>
    </CartButtonStyle>
    </>
    )
    
}
export default CartButton


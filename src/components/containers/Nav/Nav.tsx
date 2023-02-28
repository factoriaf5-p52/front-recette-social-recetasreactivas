import { NavContainer, NavIcon, NavLi, NavStyle } from './NavStyle'
import ProfileIcon from '../../icons/ProfileIcon'
import React, { useState } from 'react'

const Nav = () =>  {

    return ( 
   
    <NavStyle>
        <NavContainer >
            <NavIcon  >
                <ProfileIcon  color="blue" width="100" height="100"/>
                <NavLi>Perfil</NavLi>
            </NavIcon>
        </NavContainer>
    </NavStyle>

    )
    
}
export default Nav


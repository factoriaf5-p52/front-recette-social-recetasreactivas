import { GiChefToque,  } from "react-icons/gi";
import { AiFillHome,  } from "react-icons/ai";
import { FaUserAlt, FaBook } from "react-icons/fa";
import { NavContainer,  NavLi, NavStyle } from "./NavStyle"

import React from 'react'
import { Link } from "react-router-dom";

type Props = {}

const Nav = (props: Props) => {
  return (
    <NavStyle>
    <NavContainer>
        <Link to="/Home" style={{ textDecoration: 'none' }}><NavLi><AiFillHome fill="#b6d6f3"/>Home</NavLi></Link>
        <Link to="/asdf" style={{ textDecoration: 'none' }}><NavLi><GiChefToque fill="#b6d6f3"/>Explore</NavLi></Link>
        <Link to="/SocialPage" style={{ textDecoration: 'none' }}><NavLi><FaBook fill="#b6d6f3"/>Recipes</NavLi></Link>
        <Link to="/Profile" style={{ textDecoration: 'none' }}><NavLi><FaUserAlt fill="#b6d6f3"/>Profile</NavLi></Link>
    </NavContainer>
    </NavStyle>
  )
}

export default Nav
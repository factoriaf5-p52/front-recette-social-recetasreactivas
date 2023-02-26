import styled from "styled-components";

export const NavStyle = styled.nav`
position: fixed;
margin: 0;
bottom: 0%;
width: 100%;
height: 80px;
background-color: white;
box-shadow: 0px 7px 26px rgba(64, 64, 64, 0.36);
border-radius: 20px 20px 0px 0px;

`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0.5em 3.5em;

`

export const NavLi = styled.li`
color: var(--color-white-secondary);
font-size: 16px;
text-decoration: none;

`
export const NavIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
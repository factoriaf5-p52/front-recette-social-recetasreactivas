import styled from "styled-components";

export const BottomNavStyle = styled.footer`
position: fixed;
margin: 0;
bottom: 0%;
width: 100%;
height: 80px;
background-color: white;
box-shadow: 0px 7px 26px rgba(64, 64, 64, 0.36);
border-radius: 20px 20px 0px 0px;


.navContainer {
display: flex;
justify-content: space-between;
margin: 0.5em 3.5em;
}

.navContainer p{
    color: var(--color-white-primary);
    font-size: 16px;
}

.nav-icon {
display: flex;
flex-direction: column;
align-items: center;
}
`

import styled from "styled-components";
import huevoFrito from './../../assets/huevoFrito.gif'

export const HomeStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color:--color-black;
font-family: 'Poppins', sans-serif;
background-image: url(${huevoFrito});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 100vh;
width: 100%;
    div{
        margin:3em;
    }
    footer {
        position: absolute;
        bottom: 0;
        margin:0 auto
        }
`
export const HomeNav = styled.div`
    display:flex;
    justify-content:flex-end;
`
export const BackgroundGif = styled.div`

`
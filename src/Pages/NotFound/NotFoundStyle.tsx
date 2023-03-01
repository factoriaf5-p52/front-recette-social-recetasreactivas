import styled from "styled-components";
import NotFoundImg from '../../assets/NotFound.png'

export const NotFoundStyle=styled.div`
display: flex;  
align-items: center;
justify-content: center;
height: 70vh;
flex-direction: column;
background: url(${NotFoundImg});
background-repeat: no-repeat;
background-position: center;
margin-top: 5%;
`
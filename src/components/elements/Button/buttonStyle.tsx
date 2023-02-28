import styled from "styled-components";

export const ButtonStyle = styled.button`
margin-top: 1.5em;
background-color: var(--color-highlights);
color: white;
font-weight: 600;
font-size: 18px;
width: 308px;
height: 60px;
border-radius: 25px;
border: none;

&:focus{
    transition: 0.2s;
    background-color:  #279d60;
}
`
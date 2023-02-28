import styled from "styled-components";

export const InputStyle = styled.input`
width: 308px;
height: 60px;
background: #FFFFFF;
border-radius: 25px;
border: none;
outline: transparent;
font-weight: 400;
font-size: 16px;
padding-left: 1.5em;

&:focus{
    transition: 0.2s;
    border: 2px solid var(--color-highlights);
}
`
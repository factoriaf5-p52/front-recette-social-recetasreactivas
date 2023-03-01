import styled from "styled-components";
import foodPic from '../../assets/foodPic.svg'


export const RecipeDetailStyle = styled.div`
    //background-color: #FFFFFF;
    padding: 1.5em;
    border-radius: 25px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;


    

`

export const Top = styled.div`
    background-image: url(${foodPic}) no-repeat fixed top;
    background-size: cover;
    /* display: flex;
    align-items: center;
    gap: 1rem; */
`

export const First = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1em;
` 

export const Title = styled.h1`
display: block;
width: 100%;
margin-top: 10px;
font-weight: 700;
font-size: 20px;
`

export const Time = styled.div`
    
` 

export const Ingridients = styled.div`

`

export const Recipe = styled.div`

`

export const Field = styled.div`
    background-color: #FFFFFF;
    border-radius: 25px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;    
    object-fit: cover;
    


` 
export const Text = styled.div`
    
    margin: 2em;
    
` 
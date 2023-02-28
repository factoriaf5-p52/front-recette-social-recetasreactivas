import styled from "styled-components";

export const FoodTypeCardStyle = styled.div`
background-color: #FFFFFF;
padding: 2em;
border-radius: 25px;
width: 340px;
height: 397px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:0 auto;




.text{
    grid-area:title;
    justify-content: center;

}
`
export const Cover = styled.div`
img {
    width: 310px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;    
    object-fit: cover;
    border-radius: 10px;
}
` 

export const Tags = styled.div`
margin-top:10px;
width: 100%;
display:flex;
flex-direction:row;
align-content: flex-start;
justify-content: space-around;
` 

export const Top = styled.div`
display: flex;
align-items: center;
gap: 1rem;
` 
export const Profile = styled.div`
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
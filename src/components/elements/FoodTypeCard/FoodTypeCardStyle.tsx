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



.user{
    display:flex;
    flex-direction: row;
    grid-area: user;
    img{
        height:3dvh;
    }
}

.foodImgCard>img{
    width: 310px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;    
    object-fit: cover;
    border-radius: 10px;
  
 }


.text{
    grid-area:title;
    justify-content: center;
    span{
        margin-top:2dvh;
        display:flex;
        flex-direction:row;
        align-content: center;
        justify-content: space-around;
        p{
            background-color: #D8ECFE;
            border-radius: 10px;
            width:7dvh;
            
        }
    }
}

`
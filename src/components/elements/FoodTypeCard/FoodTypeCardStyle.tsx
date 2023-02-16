import styled from "styled-components";

export const FoodTypeCardStyle = styled.div`
background-color: #FFFFFF;
border-radius: 25px;
height: 39dvh;
width: 34dvh;
display:grid;
grid-template-areas: 
"rating rating rating blank blank user"
"rating rating rating blank blank user"
"image image image image image image"
"image image image image image image"
"image image image image image image"
"image image image image image image"
"image image image image image image"
"image image image image image image"
"title title title title title title"
"text text text text text text";
align-items: center;
justify-items: stretch;
margin:0 auto;

.rating{
    display: flex;
    flex-direction:row;
    grid-area: rating;
    img {
        height: 2dvh;
    }
}

.user{
    display:flex;
    flex-direction: row;
    grid-area: user;
    img{
        height:3dvh;
    }
}

.foodImgCard>img{
    height: 22dvh;
    width: 16dvh;
    grid-area:image;
    object-fit: cover;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
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
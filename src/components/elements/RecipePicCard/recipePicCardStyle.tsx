import styled from "styled-components";

export const RecipePicCardStyle = styled.div`
position: relative;
text-align: center;
width: 165px;
height: 165px;
overflow: hidden;  
border-radius: 20px 20px 20px 20px;
img {
width: 100%;
height: 100%;
object-fit: cover;
}
.gradient{
    position: relative;
    
}
.gradient::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    
    background: linear-gradient(190deg, rgba(0,0,0,1) 0%, rgba(253,255,255,0) 70%);
}
`
export const Title = styled.h1`
position: absolute;
top: 70%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
font-weight: 700;
font-size: 16px;
text-align: center;
color: #FFFFFF;
width: 100%;
height: 100%;
`
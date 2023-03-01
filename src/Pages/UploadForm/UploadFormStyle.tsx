import styled from "styled-components";

export const UploadFormStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

footer {
position: absolute;
bottom: 0;
}
footer img{
    height:50px;
    margin-bottom:20px;    
}
`

export const UploadNav = styled.div`
position: absolute;
top: 0;
display: flex;
justify-content: flex-start;
align-items: center;
width: 90%;
height: 80px;
color: black;
margin: 1.5em 0 0 2em;

h3 {
margin-left: 28%;
}
`
export const ImageCover = styled.div`
position: absolute;
text-align: center;
width: 308px;
height: 252px;
left: 34px;
top: 100px;
background: #C4E2FF;
border-radius: 40px;

`
export const Form = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
top: 130px;
Button{
    margin-top:15px;
}

`




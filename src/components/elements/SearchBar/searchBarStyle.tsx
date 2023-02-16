import styled from "styled-components";

export const SearchBarStyle = styled.div`
height: 7dvh;
background-color:#D8ECFE;;
border-radius: 50px;
width:85%;
margin:0 auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;


input{
    border:0;
    outline:none;
    height:3.5dvh;
    width:50%;
    font-size: 3dvh;
    background-color: #D8ECFE;:
}

img{
    height: 5dvh;
    width: 5dvh;
}

.search-icon{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
}

.filter-icon{
    border-radius: 50%;
    width: 6dvh;
    height: 6dvh;
    background-color:#C4E2FF;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
}
`
import styled from "styled-components";

export const ExploreStyle=styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 1em;

p{
    text-align:center;
}


span{
    display:grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1em;
    column-gap: 1em;
    margin: 10px auto;
}

`

export const ExploreNav=styled.div`

display: flex;
justify-content: space-between;
margin: 1.5em;
align-items: center;

`

export const ChipContainer =styled.div`
    margin-left: 1em;
`
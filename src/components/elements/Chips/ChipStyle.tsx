import styled, { ThemedStyledFunction } from 'styled-components';



  export const StyledChip = styled.div<{ color: string }>`
  display: inline-block;
  padding: 0.4rem 0.7rem ;
  margin: 0.5rem;
  border-radius: 999px;
  color: black;
  font-weight: 500;
  background-color: ${props => props.color};
 
`

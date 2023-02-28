import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const selectedColor = "#00C27A";
const defaultColor = "transparent";
const selectedWeight = "600";
const defaultWeight = "400"

export const TabItem = styled.div`
  background-color:  #EAF6FF;;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
  text-align: center;
  font-weight: ${(props) => (
  props.selected ? selectedWeight : defaultWeight
  )};
  border-bottom: 4px solid ${(props) => (
  props.selected ? selectedColor : defaultColor
  )};
`;
import React from "react";
import styled from "styled-components";

const StyledFruit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 200px;
  color: white;
  background-color: ${(props) => {
    return props.color;
  }};
`;

export default StyledFruit;

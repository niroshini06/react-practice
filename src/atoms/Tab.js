import React from "react";
import styled from "styled-components";

const StyledTab = styled.button`
  // background-color: #99ccff;
  min-width: 300px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  border: none;
  text-align: center;
  margin: 5px;
  background-color: ${(props) => {
    console.log("inside tab comp", props.tabSelected);
    return props.tabSelected ? "red" : "#99ccff";
  }};
`;

// function Tab(props) {
//   return <StyledTab onClick={props.onClick}>{props.children}</StyledTab>;
// }

export default StyledTab;

import React from "react";
import styled from "styled-components";

const StyledTab = styled.button`
  // background-color: #99ccff;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  border: none;
  text-align: center;
  margin: 5px;
  background-color: ${(props) => (props.selected ? "red" : "99ccff")};
`;

function Tab(props) {
  return <StyledTab onClick={props.onClick}>{props.children}</StyledTab>;
}

export default Tab;

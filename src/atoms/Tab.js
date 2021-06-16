import React from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  border: solid 1px black;
  background-color: grey;
  color: #fff;
  width: 10%;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
`;

function Tab(prop) {
  return <StyledTab>{prop.children}</StyledTab>;
}

export default Tab;

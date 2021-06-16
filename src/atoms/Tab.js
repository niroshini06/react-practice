import React from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  background-color: grey;
  color: #fff;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
  margin: 5px;
`;

function Tab(prop) {
  return <StyledTab>{prop.children}</StyledTab>;
}

export default Tab;

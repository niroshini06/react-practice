import React, { useEffect } from "react";
import Fruit from "../atoms/Fruit";
import FlexCenter from "../atoms/FlexCenter";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFruit = styled.div`
  // background-color: ${(props) => props.color};
  width: 100px;
  height: 30px;
  color: black;
  border: solid 1px black;
  margin: 10px;
  text-align: center;
  line-height: 30px;
`;

function GuidanceApp() {
  const fruitsArray = useSelector((state) => state.fruits.fruitsArray);
  console.log("gui-fruitsArray", fruitsArray);
  let revArr = [];
  if (fruitsArray.length) {
    revArr = [...fruitsArray];
    revArr.reverse();
  }

  return (
    <FlexCenter style={{ width: "75%" }}>
      <Fruit color="red" fruitName="apple" />
      <Fruit color="orange" fruitName="orange" />
      <Fruit color="violet" fruitName="grapes" />
      <div>
        {revArr.map((e, i) => (
          <StyledFruit key={i}>{e}</StyledFruit>
        ))}
      </div>
    </FlexCenter>
  );
}

export default GuidanceApp;

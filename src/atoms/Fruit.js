import React, { useState } from "react";
import styled from "styled-components";
import FlexCenter from "../atoms/FlexCenter";
import { useDispatch, useSelector } from "react-redux";

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

const roundedDiv = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "soild 1px black",
  backgroundColor: "green",
  margin: "10px",
};
function Fruit(props) {
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  const fruitsArray = useSelector((state) => state.fruits.fruitsArray);

  function increment() {
    switch (props.fruitName) {
      case "apple": {
        dispatch({ type: "increment-apple" });
      }
      case "orange": {
        dispatch({ type: "increment-orange" });
      }
      case "grapes": {
        dispatch({ type: "increment-grapes" });
      }
    }
  }
  function decrement() {
    if (props.fruitName === fruitsArray[fruitsArray.length - 1]) {
      switch (props.fruitName) {
        case "apple": {
          dispatch({ type: "decrement-apple" });
        }
        case "orange": {
          dispatch({ type: "decrement-orange" });
        }
        case "grapes": {
          dispatch({ type: "decrement-grapes" });
        }
      }
    } else {
      alert("please select valid fruit");
    }
  }
  return (
    <StyledFruit color={props.color}>
      <div>{props.fruitName}</div>
      <div>{count}</div>
      <FlexCenter>
        <FlexCenter style={roundedDiv} onClick={increment}>
          <h2>+</h2>
        </FlexCenter>
        <FlexCenter style={roundedDiv} onClick={decrement}>
          <h2>-</h2>
        </FlexCenter>
      </FlexCenter>
    </StyledFruit>
  );
}

export default Fruit;

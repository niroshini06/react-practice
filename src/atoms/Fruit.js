import React, { useState, useEffect } from "react";
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
  const {
    appleCount,
    orangeCount,
    grapesCount,
    fruitsArray = [],
  } = useSelector((state) => state.fruits);

  useEffect(() => {
    if (props.fruitName === "apple") {
      setCount(appleCount);
    } else if (props.fruitName === "orange") {
      setCount(orangeCount);
    } else if (props.fruitName === "grapes") {
      setCount(grapesCount);
    }
  }, [useSelector((state) => state.fruits)]);

  function increment() {
    console.log("invoking ---", props.fruitName);
    switch (props.fruitName) {
      case "apple": {
        dispatch({ type: "ADD_APPLE_TO_CART" });
        break;
      }
      case "orange": {
        dispatch({ type: "ADD_ORANGE_TO_CART" });
        break;
      }
      case "grapes": {
        dispatch({ type: "ADD_GRAPES_TO_CART" });
        break;
      }
    }
  }
  function decrement() {
    if (props.fruitName === fruitsArray[fruitsArray?.length - 1]) {
      switch (props.fruitName) {
        case "apple": {
          dispatch({ type: "REMOVE_APPLE_FROM_CART" });
          break;
        }
        case "orange": {
          dispatch({ type: "REMOVE_ORANGE_FROM_CART" });
          break;
        }
        case "grapes": {
          dispatch({ type: "REMOVE_GRAPES_FROM_CART" });
          break;
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

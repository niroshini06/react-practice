import React, { useState, useEffect } from "react";
import StyledFruit from "../atoms/StyledFruit2";
import FlexCenter from "../atoms/FlexCenter";
import { useDispatch, useSelector } from "react-redux";

const roundedDiv = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "soild 1px black",
  backgroundColor: "green",
  margin: "10px",
};

function Fruit2(props) {
  const dispatch = useDispatch();
  const { currentFruit, fruitsArray } = useSelector((state) => state.fruits2);

  function addFruitToCart() {
    if (props.item.currentCount <= 0) {
      alert("Please select valid fruit");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: props.item });
    }
  }

  function removeFruitFromCart() {
    if (
      props.item.currentCount == props.item.maxCount ||
      props.item.name != fruitsArray[fruitsArray.length - 1]
    ) {
      alert("Please select valid fruit");
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: props.item });
    }
  }

  return (
    <StyledFruit color={props.item.color}>
      <div>{props.item.name}</div>
      <div>{props.item.currentCount}</div>
      <FlexCenter>
        <FlexCenter style={roundedDiv} onClick={addFruitToCart}>
          <h2>+</h2>
        </FlexCenter>
        <FlexCenter style={roundedDiv} onClick={removeFruitFromCart}>
          <h2>-</h2>
        </FlexCenter>
      </FlexCenter>
    </StyledFruit>
  );
}

export default Fruit2;

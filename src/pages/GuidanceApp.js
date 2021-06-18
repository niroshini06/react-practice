import React, { useEffect } from "react";
import Fruit from "../atoms/Fruit";
import FlexCenter from "../atoms/FlexCenter";
import { useSelector } from "react-redux";

function GuidanceApp() {
  const fruitsArray = useSelector((state) => state.fruits.fruitsArray);
  let revArr = [...fruitsArray];
  revArr.reverse();

  return (
    <FlexCenter style={{ width: "75%" }}>
      <Fruit color="red" fruitName="apple" />
      <Fruit color="orange" fruitName="orange" />
      <Fruit color="violet" fruitName="grapes" />
      <div>
        {revArr.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </FlexCenter>
  );
}

export default GuidanceApp;

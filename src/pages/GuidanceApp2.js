import React, { useEffect } from "react";
import Fruit from "../components/Fruit2";
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

function GuidanceApp2() {
  const items = useSelector((state) => state.fruits2.items);
  const fruitsArray = useSelector((state) => state.fruits2.fruitsArray);

  useEffect(() => {
    console.log("guid 2 rerendered");
  }, [useSelector((state) => state.fruits2)]);

  let revArr = [];
  if (fruitsArray.length) {
    revArr = [...fruitsArray];
    revArr.reverse();
  }

  return (
    <FlexCenter style={{ width: "75%" }}>
      {items.map((e) => (
        <Fruit key={e.name} item={e}>
          {e.name}
        </Fruit>
      ))}
      <div>
        {revArr.map((e, i) => (
          <StyledFruit key={i}>{e}</StyledFruit>
        ))}
      </div>
    </FlexCenter>
  );
}

export default GuidanceApp2;

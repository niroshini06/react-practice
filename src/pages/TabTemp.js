import React, { useState } from "react";
import Tab from "../atoms/Tab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "antd";

const StyledTabsDiv = styled.div`
  border-bottom: solid 1px black;
  height: 50px;
  line-height: 50px;
`;

function TabTemp() {
  const [tabCount, setTabCount] = useState([{ title: "tab1", value: "tab1" }]);
  console.log("type check", Array.isArray(tabCount));

  function addTab() {
    let number = tabCount.length + 1;
    let temp = {
      title: "tab" + number,
      value: "tab" + number,
    };
    setTabCount([...tabCount, temp]);
  }

  return (
    <div className="outer" style={{ border: "solid 1px black" }}>
      <StyledTabsDiv>
        <Row align="middle">
          <Col>
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </Col>
          <Col>
            <Row>
              {tabCount.map((e, i) => (
                <Col key={i}>
                  <Tab>
                    <span>{e.title}</span>
                  </Tab>
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faPlus} size="lg" onClick={addTab} />
          </Col>
        </Row>
      </StyledTabsDiv>
      <p>content</p>
    </div>
  );
}

export default TabTemp;

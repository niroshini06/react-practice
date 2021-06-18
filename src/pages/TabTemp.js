import React, { useState, useEffect } from "react";
import Tab from "../atoms/Tab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "antd";

const TabsOuter = styled.div`
  max-width: 80%;
  height: 60px;
  overflow: hidden;
  margin: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

function TabTemp() {
  const [tabCount, setTabCount] = useState([{ title: "tab1", value: "tab1" }]);
  const [currentTabIndex, setcurrentTabIndex] = useState(0);

  function addTab() {
    let number = tabCount.length + 1;
    let temp = {
      title: "tab" + number,
      value: "tab" + number,
    };
    setTabCount([...tabCount, temp]);
  }

  function handleTabClick(i) {
    setcurrentTabIndex(i);
  }

  useEffect(() => {
    console.log({ currentTabIndex });
  }, [currentTabIndex]);
  return (
    <div className="outer" style={{ border: "solid 1px black" }}>
      <TabsContainer>
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        <TabsOuter>
          <Tabs>
            {tabCount.map((e, i) => (
              <Tab
                key={i}
                onClick={() => handleTabClick(i)}
                tabSelected={i === currentTabIndex}
              >
                <span>{e.title}</span>
              </Tab>
            ))}
          </Tabs>
        </TabsOuter>
        <FontAwesomeIcon icon={faPlus} size="lg" onClick={addTab} />

        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </TabsContainer>

      <p style={{ borderTop: "solid 1px black" }}>
        {tabCount[currentTabIndex].value}
      </p>
    </div>
  );
}

export default TabTemp;

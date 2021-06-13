import React from "react";
import { Menu } from "antd";

function Home() {
  function handleClick() {
    console.log("hi");
  }
  return (
    <Menu className="header " onClick={handleClick} mode="horizontal">
      <Menu.Item key="dashboard">Dashboard</Menu.Item>
      <Menu.Item key="signUp">Sign up</Menu.Item>
      <Menu.Item key="login">Login</Menu.Item>
    </Menu>
  );
}

export default Home;

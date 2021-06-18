import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Menu className="header" mode="horizontal">
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="signUp">
          <Link to="/signup">Sign up</Link>
        </Menu.Item>
        <Menu.Item key="login">
          c<Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="tabs">
          <Link to="/tabs">Tabs</Link>
        </Menu.Item>
        <Menu.Item key="nested-routes">
          <Link to="/nested-routes">nestedRoutes</Link>
        </Menu.Item>
        <Menu.Item key="guidance-app">
          <Link to="/guidance-app">guidance-app</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Home;

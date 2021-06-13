import React from "react";
import { BrowserRouter, Route, Switch } from "react-router";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";

function Router() {
  return (
    <BrowserRouter>
      <Router path="/login">
        <Login />
      </Router>
      <Router path="/dashboard">
        <Dashboard />
      </Router>
      <Router path="/signup">
        <Signup />
      </Router>
    </BrowserRouter>
  );
}

export default Router;

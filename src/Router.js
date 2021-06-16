import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import TabTemp from "./pages/TabTemp";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/news-detail/:paper">
          <NewsDetail />
        </Route>
        <Route exact path="/tabs">
          <TabTemp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

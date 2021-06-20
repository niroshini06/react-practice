import Home from "./pages/Home";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import TabTemp from "./pages/TabTemp";
import NestedRoute from "./pages/NestedRoute";
import GuidanceApp from "./pages/GuidanceApp";
import GuidanceApp2 from "./pages/GuidanceApp2";

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
        {/* Note: dont add exact match to the routes that need to be nested */}
        <Route path="/nested-routes">
          <NestedRoute />
        </Route>
        <Route path="/guidance-app">
          <GuidanceApp />
        </Route>
        <Route path="/guidance-app2">
          <GuidanceApp2 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

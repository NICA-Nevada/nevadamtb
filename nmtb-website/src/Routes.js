import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Team from "./containers/Team";
import Features from "./containers/Features";
import NotFound from "./containers/NotFound";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/team" exact component={Team} />
    <Route path="/features" exact component={Features} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

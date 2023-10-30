import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Update from "../pages/update";
import Create from "../pages/create";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/update" component={Update}></Route>
      <Route path="/create" component={Create}></Route>
      <Redirect to="/home" />
    </Switch>
  );
};
export default Routes;

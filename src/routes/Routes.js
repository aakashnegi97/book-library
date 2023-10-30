import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Redirect to="/home" />
    </Switch>
  );
};
export default Routes;

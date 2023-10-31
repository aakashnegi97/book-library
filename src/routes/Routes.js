import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Update from "../pages/update";
import Create from "../pages/create";
import { config } from "../utils/constants";

const Routes = () => {
  return (
    <Switch>
      <Route path={config.routes.home.url} component={Home}></Route>
      <Route path={config.routes.update.url} component={Update}></Route>
      <Route path={config.routes.create.url} component={Create}></Route>
      <Redirect to={config.routes.home.url} />
    </Switch>
  );
};
export default Routes;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../modules/commit/Home"
import CommitDetails from "../modules/commit/CommitDetails"
import { localRoutes } from '../utils/constants';


const ContentSwitch = () => {
  
  return (
    <Switch>
      <Route path={localRoutes.home} component={Home} exact={true}></Route>
      <Route path={localRoutes.details} component={CommitDetails} exact={true}></Route>
    </Switch>
  );
};

export default ContentSwitch;

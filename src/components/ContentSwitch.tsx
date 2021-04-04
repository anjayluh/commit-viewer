import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../modules/repository/Home"
import RepositoryDetails from "../modules/repository/RepositoryDetails"
import { localRoutes } from '../data/constants';


const ContentSwitch = () => {
  
  return (
    <Switch>
      <Route path={localRoutes.home} component={Home} exact={true}></Route>
      <Route path={localRoutes.details} component={RepositoryDetails} exact={true}></Route>
    </Switch>
  );
};

export default ContentSwitch;

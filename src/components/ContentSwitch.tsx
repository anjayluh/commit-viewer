import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Note from "../modules/note/Note"
import { localRoutes } from '../utils/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    pageHeading: {
        display: "flex",
    },
  })
);

const ContentSwitch = () => {
  const classes = useStyles();
  
  return (
    <Switch>
      <Route path={localRoutes.notes} component={Note}></Route>
    </Switch>
  );
};

export default ContentSwitch;

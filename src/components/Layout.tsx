import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { RouteComponentProps } from "react-router";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Note from "../modules/note/Note"

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

interface IProps extends RouteComponentProps {
  pageTitle?: string
}

const Layout: React.FC<IProps> = (props: any) => {
  const classes = useStyles();
  
  return (
    <Grid item xs={9}>
          <Box p={1} className={classes.root}>
            {props.schildren}
          </Box>
          
        </Grid>
  );
};

export default Layout;

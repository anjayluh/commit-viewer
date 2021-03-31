import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "../../components/Dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#f7f5f5"
    },
    pageHeading: {
      display: "flex",
    },
  })
);

const Note = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state: IState) => state.note.data);
  const [open, setOpen] = useState(false)

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }
  const handleSubmit = () => {
    // dispatch add note
    setOpen(false)
  
  }

  return (
    <Grid item xs={12}>
      <Box p={1} className={classes.root}>
        <Box pb={2}>
          <Grid container>
            <Grid item sm={10} xl={10} className={classes.pageHeading}>
              <Typography variant="h4">Notes</Typography>
            </Grid>
            <Grid item sm={2} xl={1} className={classes.pageHeading}>
                <Button
              variant="outlined"
              color="primary"
              style={{ width: '100%' }}
              startIcon={<AddIcon />}
              onClick={openDialog}
            >
              Add Note
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box p={1}>
        <Paper>
            {data.map((item:any, index: number) => {
              return (
                <Box>
                  {item}
                </Box>
              )
            })}
        </Paper>
      </Box>
      <Dialog open={open} title={'Add Note'} closeDialog={closeDialog} handleSubmit={handleSubmit}>
        child
      </Dialog>
    </Grid>
  );
};

export default Note;

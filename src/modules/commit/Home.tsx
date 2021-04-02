import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Chip from "../../components/styled-components/Chip";
import Button from "../../components/styled-components/Button";
import TextField from "../../components/styled-components/TextField";

const Note = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: IState) => state.commit.data);
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
    <div>
        <Chip>
          label
        </ Chip>
        <Button>
          Search commit
        </ Button>
        <TextField placeHolder={'Eg. facebook/react'} type={'text'} />
    </div>
  );
};

export default Note;

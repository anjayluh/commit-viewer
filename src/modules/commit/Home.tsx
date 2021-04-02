import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Chip from "../../components/styled-components/Chip";

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
    </div>
  );
};

export default Note;

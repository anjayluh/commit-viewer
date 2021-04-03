import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Loader from "../../components/Loader";
import DetailsCard from "../../components/DetailsCard";

const CommitDetails = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: IState) => state.commit.commitDetails);

  return (
    <div>
        <Loader />
        <DetailsCard author={data.author} description={data.message} />
    </div>
  );
};

export default CommitDetails;

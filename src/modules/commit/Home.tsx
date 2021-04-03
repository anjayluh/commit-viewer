import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../data/types";
import Chip from "../../components/styled-components/Chip";
import Button from "../../components/styled-components/Button";
import TextField from "../../components/styled-components/TextField";
import HeadingOne from "../../components/styled-components/HeadingOne";
import Paragraph from "../../components/styled-components/Paragraph";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const Commit = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: IState) => state.commit.data);

  return (
    <div>
      <Header>
        <Navigation></Navigation>
      </Header>
        <Chip>
          label
        </ Chip>
        <HeadingOne>
          Discover the world of code
        </HeadingOne>
        <Paragraph className={`normal dark`}>
          Explore open source projects, and read their commit history to see how they were built
        </Paragraph>
        <TextField placeHolder={'Eg. facebook/react'} type={'text'} iconClass={"fa fa-search icon"}
        containerStyles={{
          position: "absolute",
          width: 694,
          height: 58,
          left: 240,
          top: 474
        }} />
        <Button>
          See commits 🚀
        </ Button>

        <Paragraph className={`normal dark small`}>
          Or pick one of these suggested repos
        </Paragraph>
    </div>
  );
};

export default Commit;

import React, { useState } from "react";
import Paragraph from "./styled-components/Paragraph";

interface Props {
  customStyles?: any;
  customClass?: string;
}

const styles = {
  textAlign: 'center',
  letterSpacing: '-0.4px'
};
const Loader = (props: Props) => {

  return (
    <div>
        <Paragraph className={`normal dark logo`} customStyle={{...styles, ...props.customStyles}}>
          Loading...
        </Paragraph>
    </div>
  );
};

export default Loader;

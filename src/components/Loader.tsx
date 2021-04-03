import React, { useState } from "react";
import Paragraph from "./styled-components/Paragraph";

const Loader = () => {

  return (
    <div>
        <Paragraph className={`normal dark`} customStyle={{
        textAlign: 'center',
        letterSpacing: '-0.4px'}}>
          Loading...
        </Paragraph>
    </div>
  );
};

export default Loader;

import React, { useState } from "react";
import Paragraph from "./styled-components/Paragraph";

const NoData = () => {

  return (
    <div>
        <Paragraph className={`normal dark`} customStyle={{
        textAlign: 'center',
        letterSpacing: '-0.4px'}}>
          No data found
        </Paragraph>
    </div>
  );
};

export default NoData;

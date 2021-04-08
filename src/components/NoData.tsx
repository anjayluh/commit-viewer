import * as React from 'react';
import Paragraph from "./styled-components/Paragraph";


interface Props {
  text: string;
}

const NoData = (props: Props) => {

  return (
    <div>
        <Paragraph className={`normal dark`} customStyle={{
        textAlign: 'center',
        letterSpacing: '-0.4px'}}>
          {props.text}
        </Paragraph>
    </div>
  );
};

export default NoData;

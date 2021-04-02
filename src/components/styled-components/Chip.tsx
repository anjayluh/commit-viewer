import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    handleClick?: () => any;
}

const ChipStyled = styled.button`
  background: #29335D;
  border-radius: 4px;
  border: none;
  color: white;
  min-width: 83px;
  height: 21px;
`;

const Chip = (props: Props) => (
    <ChipStyled onClick={props.handleClick}>
        {props.children}
    </ChipStyled>
);

export default ChipStyled;
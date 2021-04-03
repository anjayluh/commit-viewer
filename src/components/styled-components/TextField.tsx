import classes from '*.module.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

interface Props {
    placeHolder?: string;
    handleEnter?: () => any;
    type: string;
    iconClass?: string;
    containerStyles: any;
}
const TextFieldStyled = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
    width: 694px;
    height: 58px;

    /* Neutral */

    background: #DFE4EA;
    border-radius: 8px;
    border-width: 0px;
    &:focus, &:hover {
      border-width: 2px;
      border-color: #29335C;
    }
    ::placeholder, ::value {
        position: absolute;
        width: 171px;
        height: 28px;
        left: 50px;
        top: calc(50% - 28px/2);

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        /* identical to box height, or 140% */

        letter-spacing: -0.5px;

        /* Placeholder primary */

        color: #B1B5C5;
  }
`;

const IconStyled = styled.i.attrs(props => ({
  className: props.className,
}))`
  position: absolute;
  font-size: 21px;
  top: 18px;
  left: 13px;
  `

const TextField = (props: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <span style={props.containerStyles}>
      <IconStyled className={props.iconClass} />
      <TextFieldStyled onClick={props.handleEnter} type={'text'} placeholder={props.placeHolder}
    value={inputValue} onChange={(event) => { setInputValue(event.target.value);}} />
    </span>
)};

export default TextField;
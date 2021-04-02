import classes from '*.module.css';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    placeHolder?: string;
    handleEnter?: () => any;
    type: string;
}
const TextFieldStyled = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
    position: absolute;
    width: 694px;
    height: 58px;
    left: 240px;
    top: 474px;

    /* Neutral */

    background: #DFE4EA;
    border-radius: 8px;
    border: 0px;
    ::placeholder {
        position: absolute;
        width: 171px;
        height: 28px;
        left: 45.63px;
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
const TextField = (props: Props) => (
    <TextFieldStyled onClick={props.handleEnter} type={'text'} placeholder={props.placeHolder} />
);

export default TextField;
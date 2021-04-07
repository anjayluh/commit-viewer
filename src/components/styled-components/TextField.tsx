import classes from '*.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { RepositoryRequestConstants} from "../../data/redux/repository/reducer";

interface Props {
    placeHolder?: string;
    handleEnter?: (item: any) => any;
    type: string;
    iconClass?: string;
    containerStyles: any;
}
const TextFieldStyled = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
    width: 100%;
    height: 58px;
    top: -21px;
    position: relative;
    padding-left: 45px;
    /* Neutral */

    background: #DFE4EA;
    border-radius: 8px;
    border-width: 0px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.5px;
    &:focus, &:hover {
      border-width: 2px;
      border-color: #29335C;
    }
    &::placeholder {
      /* Placeholder primary */
      color: #B1B5C5;
    }
`;

const IconStyled = styled.i.attrs(props => ({
  className: props.className,
}))`
  position: relative;
  font-size: 18px;
  top: calc(50% - 23px/2);
  left: 19px;
  z-index: 1;
  `

const TextField = (props: Props) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    dispatch({
      type: RepositoryRequestConstants.SearchRepositories,
      payload: event.target.value,
    });
  };

  return (
    <div style={props.containerStyles}>
      <IconStyled className={props.iconClass} />
      <TextFieldStyled onClick={props.handleEnter} type={'text'} placeholder={props.placeHolder}
    value={inputValue} onChange={handleChange} />
    </div>
)};

export default TextField;
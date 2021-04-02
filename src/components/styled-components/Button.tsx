import classes from '*.module.css';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    handleClick?: () => any;
}

const ButtonStyled = styled.button`
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* Secondary */

    background: #F3663F;
    border-radius: 8px;
    border: 0px;
    width: 210px;
    height: 58px;
`;
const ButtonContent = styled.span`
    /* Buttons / Large */

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    /* identical to box height, or 140% */

    text-align: center;
    letter-spacing: -0.5px;

    /* White */

    color: #FFFFFF;
`;
const Button = (props: Props) => (
    <ButtonStyled onClick={props.handleClick}>
        <ButtonContent>
            {props.children}
        </ButtonContent>
    </ButtonStyled>
);

export default Button;
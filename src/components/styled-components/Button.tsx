import classes from '*.module.css';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    handleClick?: (item: any) => any;
    params: any;
}

const ButtonStyled = styled.button`
    /* Secondary */
    background: #F3663F;
    border-radius: 8px;
    border: 0px;
    width: 210px;
    height: 58px;
    &:focus{
        outline:0
    }
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
const Button = (props: Props) => {
    const handleClick = () => {
        props.handleClick && props.handleClick(props.params);
    }
    return(
        <ButtonStyled onClick={handleClick}>
            <ButtonContent>
                {props.children}
            </ButtonContent>
        </ButtonStyled>
    )
};

export default Button;
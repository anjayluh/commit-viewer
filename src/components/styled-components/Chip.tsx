import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    handleClick?: () => any;
}

const ChipStyled = styled.div`
    display: inline-block;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 16px;
    min-width: 140px;

    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* Primary */

    background: #29335C;
    border-radius: 8px;
    border: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.4px;

    /* White */

    color: #FFFFFF;
`;

const Chip = (props: Props) => (
    <ChipStyled onClick={props.handleClick}>
        {props.children}
    </ChipStyled>
);

export default Chip;
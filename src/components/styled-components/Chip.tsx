import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    handleClick?: (item: any) => any;
    customStyle?: any;
    item?: any;
}

const ChipStyled = styled.div`
    display: inline-block;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 16px;
    min-width: 140px;
    margin: 10px 0px;

    /* Primary */

    background: #29335C;
    border-radius: 8px;
    border: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
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

const Chip = (props: Props) => {
    const handleClick = () => {
        props.item && props.handleClick && props.handleClick(props.item)
    }
    return (
    <ChipStyled onClick={handleClick} style={props.customStyle}>
        {props.children}
    </ChipStyled>
)
};

export default Chip;
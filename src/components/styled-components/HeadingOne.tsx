import classes from '*.module.css';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
}

const HeadingOneStyled = styled.h1`
    height: 160px;
    left: 430px;
    right: 430px;
    top: 146px;

    /* Display / 01 */

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 80px;
    /* or 111% */

    text-align: center;
    letter-spacing: -3px;

    /* Dark */

    color: #18214D;
    width: 540px;
    margin: 0px auto;
`;
const HeadingOne = (props: Props) => (
    <HeadingOneStyled>
        {props.children}
    </HeadingOneStyled>
);

export default HeadingOne;
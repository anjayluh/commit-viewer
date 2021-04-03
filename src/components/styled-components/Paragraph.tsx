import classes from '*.module.css';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children: any;
    className?: any;
    customStyle?: any;
}

const ParagraphStyled = styled.p.attrs(props => ({
  className: props.className,
}))`
    /* General styles */
    font-family: Inter;
    font-size: 20px;
    font-style: normal; 
    /* Normal text*/ 
    &.normal {
        font-weight: 400;
    }
    &.semi-bold {
        font-weight: 600;
    }
    &.extra-bold {
        font-weight: 700;
    }
    &.small{
        font-size: 14px;
    }
    &.dark{
        color: #18214D;
    }
    line-height: 28px;
    /* or 140% */

    text-align: center;
    letter-spacing: -0.6px;
    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
`;
const Paragraph = (props: Props) => (
    <ParagraphStyled className={props.className} style={props.customStyle}>
        {props.children}
    </ParagraphStyled>
);

export default Paragraph;
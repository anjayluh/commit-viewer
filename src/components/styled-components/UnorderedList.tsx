import * as React from 'react';
import styled from 'styled-components';

interface Props {
    listItems: any[];
    customStyle?: any;
}
const Container = styled.div`
  width: 400px;
  margin: 30px auto;
`;

const UnorderedListStyled = styled.ul`
    &{
        display: flex;
        list-style: none;
        margin: 0px;
    }
    & li{
        position: static;
        width: 56px;
        height: 28px;
        left: 0px;
        top: 0px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;

        text-align: right;
        letter-spacing: -0.4px;

        color: #000000;

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 31px;
        padding-top: 3px;
    }
`;

const UnorderedList = (props: Props) => (
    <UnorderedListStyled>
        {props.listItems.map((item) => {
            return (
                <li style={props.customStyle} key={item}>
                    {item}
                </li>
            )
        })}
    </UnorderedListStyled>
);

export default UnorderedList;
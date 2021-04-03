import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children?: any;
    handleClick?: () => any;
}

const AvatarStyled = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    left: 4.5%;
    right: 90.09%;
    top: 0%;
    bottom: 36.17%;
    background: #C4C4C4;
    text-align: center;
    line-height: 52px;
    margin: 0 auto;
`;

const Avatar = (props: Props) => (
    <AvatarStyled onClick={props.handleClick}>
        {props.children}
    </AvatarStyled>
);

export default Avatar;
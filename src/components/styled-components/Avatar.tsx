import * as React from 'react';
import styled from 'styled-components';

interface Props {
    children?: any;
    handleClick?: () => any;
    avatar?: string;
}

const AvatarStyled = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #C4C4C4;
    text-align: center;
    line-height: 52px;
    margin: 0 auto 9px;
    & img{
        max-width:100%;
        max-height:100%;
        border-radius: 50%;
    }
`;

const Avatar = (props: Props) => (
    <AvatarStyled onClick={props.handleClick}>
        {props.avatar &&
        <picture>
            <img src={props.avatar} alt={"Avatar"} />
        </picture>
        }
        {props.children}
    </AvatarStyled>
);

export default Avatar;
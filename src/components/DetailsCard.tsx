import React, { useState } from "react";
import Paragraph from "./styled-components/Paragraph";
import Avatar from "./styled-components/Avatar";

interface Props {
    handleClick?: () => any;
    author: String;
    description: String;
}

const styles = {
    container: {
        display: 'flex',
        width: '600px',
        margin: '0 auto',
    },
    left: {
        marginRight: 'auto'
    },
    right: {
        marginLeft: 'auto'
    },
    author: {
        fontSize: '22px',
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '-0.55px',
        marginTop: '4px'
    },
    description: {
        marginTop: '29px'
    }
}

const DetailsCard = (props: Props) => {

  return (
    <div onClick={props.handleClick} style={styles.container}>
        <div style={styles.left}>
            <Avatar />
            <Paragraph className={`normal dark semi-bold`} customStyle={styles.author}>
                {props.author}
            </Paragraph>
        </div>
        <div style={styles.right}>
            <Paragraph className={`normal dark`} customStyle={styles.description}>
                {props.description}
            </Paragraph>
        </div>
    </div>
  );
};

export default DetailsCard;

import React from "react";
import Paragraph from "./styled-components/Paragraph";
import Avatar from "./styled-components/Avatar";
import {printStdDatetime} from "../utils/dateHelpers";

interface Props {
    handleClick?: () => any;
    author: String;
    description: String;
    avatar?: string;
    createdAt: Date;
}

const styles = {
    container: {
        display: 'flex',
        width: '70%',
        margin: '0 auto 25px',
    },
    left: {
        marginRight: '46px'
    },
    center: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    right: {
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
            <Avatar avatar={props.avatar} />
            <Paragraph className={`normal dark semi-bold`} customStyle={styles.author}>
                {props.author}
            </Paragraph>
        </div>
        <div style={styles.right}>
            <Paragraph className={`normal dark`} customStyle={styles.description}>
                {props.description}
            </Paragraph>
        </div>

        <div style={styles.right}>
            <Paragraph className={`normal dark`} customStyle={styles.description}>
                {printStdDatetime(new Date())}
            </Paragraph>
        </div>
    </div>
  );
};

export default DetailsCard;

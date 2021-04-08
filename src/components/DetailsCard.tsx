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
        justifyContent: 'space-between',
        margin: '0 auto 25px',
        padding: '35px 150px',
    },
    left: {
        flex: '1 0'
    },
    center: {
        flex: '3 0'
    },
    right: {
        flex: '1 0'
    },
    author: {
        fontSize: '22px',
        lineHeight: '30px',
        textAlign: 'center',
        letterSpacing: '-0.55px',
        marginTop: '4px'
    },
    description: {
        marginTop: '29px',
        textAlign: 'start'
    }
}

const DetailsCard = (props: Props) => {

  return (
    <div onClick={props.handleClick} style={styles.container} className={'details-card-container'}>
        <div style={styles.left} className={'left'}>
            <Avatar avatar={props.avatar} />
            <Paragraph className={`normal dark semi-bold author`} customStyle={styles.author}>
                {props.author}
            </Paragraph>
        </div>
        <div style={styles.center} className={'center'}>
            <Paragraph className={`normal dark`} customStyle={styles.description}>
                {props.description}
            </Paragraph>
        </div>

        <div style={styles.right} className={'right'}>
            <Paragraph className={`normal dark`} customStyle={styles.description}>
                {printStdDatetime(new Date())}
            </Paragraph>
        </div>
    </div>
  );
};

export default DetailsCard;

import React, { useState } from "react";
import Paragraph from "./styled-components/Paragraph";


const styles = {
    left: {
        marginRight: 'auto'
    },
    logo: {
        fontSize: '28px',
        lineHeight: '34px'
    }
}

const Header = () => {

  return (
    <div style={styles.left}>
        <Paragraph className={`normal dark extra-bold`} customStyle={styles.logo} >
            CommitViewer
        </Paragraph>
    </div>
  );
};

export default Header;

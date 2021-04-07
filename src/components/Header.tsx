import React, { useState, useEffect } from "react";
import Paragraph from "./styled-components/Paragraph";
import Logo from "./Logo";
interface Props {
    children: any;
    customStyles?: any;
}

const styles = {
    container: {
        display: 'flex',
        margin: '0px',
        padding: '44px 150px 30px 150px'
    },
    left: {
        marginRight: 'auto'
    },
    right: {
        marginLeft: 'auto'
    }
}

const Header = (props: Props) => {
    const mediaMatch = window.matchMedia('(min-width: 915px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
    const handler = (e: any) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <header style={{...styles.container, ...props.customStyles}}>
        <div style={styles.left}>
            <Logo />
        </div>
        <div style={styles.right}>
            {props.children}
        </div>
    </header>
  );
};

export default Header;

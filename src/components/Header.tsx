import React, { useState, useEffect } from "react";
import Paragraph from "./styled-components/Paragraph";
import Logo from "./Logo";

interface Props {
    children: any;
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        margin: '51px auto',
        padding: '0 150px',
        '@media (max-width: 4000px)': {
            display: 'none',
        },
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
    <header style={styles.container}>
        <div style={styles.left}>
            <Logo />
        </div>
        <span style={styles.right}>
            {props.children}
        </span>
    </header>
  );
};

export default Header;

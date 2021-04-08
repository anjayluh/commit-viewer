import * as React from 'react';
import UnorderedList from "./styled-components/UnorderedList";


const Navigation = () => {
    const navItems: any[] = ['About', 'Contact'];

    return (
        <UnorderedList listItems={navItems} />
  );
};

export default Navigation;


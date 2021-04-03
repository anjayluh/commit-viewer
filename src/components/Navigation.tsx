import React, { useState } from "react";
import UnorderedList from "./styled-components/UnorderedList";


const Header = () => {
    const navItems: any[] = ['About', 'Contact'];

    return (
        <UnorderedList listItems={navItems} />
  );
};

export default Header;


import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  const activeStyle = {color: "#F15B2A"};
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/library" activeStyle={activeStyle}>
        Library
      </NavLink>
      <NavLink to="/auctions" activeStyle={activeStyle} exact>
        Auctions
      </NavLink>
    </nav>
  );
};

export default Header;

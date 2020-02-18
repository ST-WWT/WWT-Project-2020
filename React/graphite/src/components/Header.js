import React from "react";
import Profile from "./Profile";

const Header = (props) => {
  return (
    <nav className="navbar stick-top" color-on-scroll="100">
    <Profile />
    <img src={'./img/graphite_logo_new.png'} alt="Graphite logo" className="noselect logo" draggable="false" />
  </nav>
  );
};

export default Header;
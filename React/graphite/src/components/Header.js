import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar stick-top" colorOnScroll="100">
    <div className="profile">
      <img src={'./img/profile.png'} alt="Profile icon" />
      <div className="notifications">
        <span className="notification n-red">
          4
        </span>
      </div>
    </div>
    <img src={'./img/graphite_logo_new.png'} alt="Graphite logo" className="noselect logo" draggable="false" />
  </nav>
  );
};

export default Header;
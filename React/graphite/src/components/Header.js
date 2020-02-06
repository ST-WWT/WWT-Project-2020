import React from "react";

const LOGO = "../../public/img/graphite_logo_new.png";
const PROFILE_ICON = "../../public/img/profile.png";

const Header = (props) => {
  return (
    <nav className="navbar stick-top" colorOnScroll="100">
    <div className="profile">
      <img src={PROFILE_ICON} alt="Profile icon" />
      <div className="notifications">
        <span className="notification n-red">
          4
        </span>
      </div>
    </div>
    <img src={LOGO} alt="Graphite logo" className="noselect logo" draggable="false" />
  </nav>
  );
};

export default Header;
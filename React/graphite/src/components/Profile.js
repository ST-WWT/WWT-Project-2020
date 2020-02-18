import React from "react";

const Profile = (props) => {
  return (
    <div className="profile">
      <img src={'./img/profile.png'} alt="Profile icon" />
      <div className="notifications">
        <span className="notification n-red">
          4
        </span>
      </div>
    </div>
  );
};

export default Profile;
import React from "react";

function ProfileCard({ statement, picture, name, position }) {
  return (
    <div className="profile-card">
      <p className="profile-paragraph">{statement}</p>
      <div className="profile-info">
        <img src={picture} className="profile-image" alt="..." />
        <div className="profile-name">
          <h4>{name}</h4>
          <p style={{ textDecoration: "underline" }}>{position}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;

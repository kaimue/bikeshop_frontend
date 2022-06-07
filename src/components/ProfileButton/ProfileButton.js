import React from "react";
import { Link } from "react-router-dom";

function ProfileButton() {
  return (
    <div>
      <Link to="/user/protected/profile">
        <button className="btn btn-outline-light" type="button">
          Profile
        </button>
      </Link>
    </div>
  );
}

export default ProfileButton;

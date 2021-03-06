import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <div className="container">
      <Link to="/user/login">
        <button className="btn btn-outline-light" type="button">
          Login
        </button>
      </Link>
    </div>
  );
}

export default LoginButton;

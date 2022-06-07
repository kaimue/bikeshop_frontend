import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth";

function LoginButton() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Link to="/home">
        <button
          className="btn btn-outline-dark"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            localStorage.removeItem("token");
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

export default LoginButton;

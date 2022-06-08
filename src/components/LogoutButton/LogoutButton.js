import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <Link to="/">
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            localStorage.removeItem("token");
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

export default LogoutButton;

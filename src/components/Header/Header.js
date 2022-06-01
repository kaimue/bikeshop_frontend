import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <Link to="/home">
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Header;

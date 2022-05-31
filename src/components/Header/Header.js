import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/home">
        <h1>Logo</h1>
      </Link>
    </div>
  );
}

export default Header;

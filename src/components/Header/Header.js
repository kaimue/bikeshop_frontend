import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/home">
        <button className="btn btn-outline-light btn-lg" type="button">
          Kais Bikeshop
        </button>
      </Link>
    </div>
  );
}

export default Header;

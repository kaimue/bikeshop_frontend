import React from "react";
import { Link } from "react-router-dom";

function CartButton() {
  return (
    <div>
      <Link to="/user/cart">
        <button className="btn btn-outline-light" type="button">
          Cart
        </button>
      </Link>
    </div>
  );
}

export default CartButton;

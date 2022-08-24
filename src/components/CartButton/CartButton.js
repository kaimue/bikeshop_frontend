import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartButton() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <div className="container">
      <Link to="/user/cart">
        <button className="btn btn-outline-light" type="button">
          Cart | {cartProducts.length}
        </button>
      </Link>
    </div>
  );
}

export default CartButton;

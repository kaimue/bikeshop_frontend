import React from "react";
import { Link } from "react-router-dom";

function CartButton() {
  return (
    <div>
      <Link to="/cart">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bikeshopimagestore.appspot.com/o/cart.png?alt=media&token=8d8ecd54-c0f7-4f7b-b935-1db1998bce8e"
          alt="Cart"
        />
      </Link>
    </div>
  );
}

export default CartButton;

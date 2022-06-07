import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const displayedProducts = () => {
    if (cartProducts.length === 0) {
      return <p>There are no products in your cart</p>;
    } else {
      return cartProducts.map((product) => (
        <div>
          <Link
            to={product.title}
            className="list-group-item list-group-item-action"
          >
            <div className="container border">
              <h1>{product.title}</h1>
              <p>{product.price} €</p>
            </div>
          </Link>
        </div>
      ));
    }
  };

  return (
    <div className="container">
      <div>{displayedProducts()}</div>
    </div>
  );
}

export default Cart;

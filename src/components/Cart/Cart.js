import React from "react";
import { Link } from "react-router-dom";

function Cart({ products, pushProducts }) {
  const displayedProducts = () => {
    if (products.length === 0) {
      return <p>There are no products in your cart</p>;
    } else {
      return products.map((product) => (
        <div>
          <Link to={product.title}>
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

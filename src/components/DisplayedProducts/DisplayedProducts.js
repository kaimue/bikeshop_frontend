import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DisplayedProducts() {
  const products = useSelector((state) => state.products.products);

  const displayedProducts = () => {
    if (products.length === 0) {
      return <p>No products found</p>;
    } else {
      return products.map((product) => (
        <div key={product._id}>
          <Link to={product._id}>
            <div className="container border">
              <h1>{product.title}</h1>
              <img
                src={product.imgUrl}
                alt={product.title}
                className="prevImage"
              />
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

export default DisplayedProducts;

import React from "react";

function SingleProduct({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SingleProduct;

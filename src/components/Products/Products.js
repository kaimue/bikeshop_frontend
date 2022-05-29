import React from "react";
import Searchbar from "../Searchbar/Searchbar";

function Products({ products, pushProducts }) {
  const displayedProducts = () => {
    if (products.length === 0) {
      return <p>No products found</p>;
    } else {
      return products.map((product) => (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ));
    }
  };
  return (
    <div>
      <Searchbar pushProducts={pushProducts}></Searchbar>
      <div>{displayedProducts()}</div>
    </div>
  );
}

export default Products;

import React from "react";
import Searchbar from "../Searchbar/Searchbar";

function SingleProduct({ products, pushProducts }) {
  const tagName = window.location.pathname.split("/").pop();

  const product = products.find((product) => product.title === tagName);
  return (
    <div>
      <div>
        <Searchbar pushProducts={pushProducts}></Searchbar>
        <h1>{product.title}</h1>
        <img src={product.imgUrl} alt={product.title} className="Image" />
        <p>{product.description}</p>
        <p>{product.price} €</p>
      </div>
    </div>
  );
}

export default SingleProduct;

import React, { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";

function SingleProduct() {
  const [products, setProducts] = useState([]);
  const tagName = window.location.pathname.split("/").pop();
  console.log(tagName);
  useEffect(() => {
    const searchProducts = async () => {
      const url = `http://localhost:5000/products/byId?q=${tagName}`;
      try {
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error("Fetch error!");
          return "No products found!!";
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    searchProducts();
  }, [tagName]);
  return (
    <div>
      {products.map((product) => (
        <div>
          <h1>{product.title}</h1>
          <img src={product.imgUrl} alt={product.title} className="Image" />
          <p>{product.description}</p>
          <p>{product.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default SingleProduct;

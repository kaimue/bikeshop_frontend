import React, { useEffect, useState } from "react";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const tagName = window.location.pathname.split("/").pop();
  console.log(tagName);
  useEffect(() => {
    const searchProducts = async () => {
      const url = `http://localhost:5000/products/single/${tagName}`;
      try {
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setProduct(data);
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
      <div>
        <h1>{product.title}</h1>
        <img src={product.imgUrl} alt={product.title} className="Image" />
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <button className="btn btn-info" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;

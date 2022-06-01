import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:5000/products";
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error("Fetch error!");
          alert("There has been an error!");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProducts();
  }, []);

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

export default Products;

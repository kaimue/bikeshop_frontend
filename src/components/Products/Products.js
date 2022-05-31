import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import Header from "../Header/Header";
import LoginButton from "../LoginButton/LoginButton";
import CartButton from "../CartButton/CartButton";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:5000/randomProducts";
      try {
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
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
        <div>
          <Link to={product.title}>
            <div className="container border" key={product._id}>
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

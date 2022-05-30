import React, { useEffect, useState } from "react";
import Products from "./components/Products/Products.js";
import SingleProduct from "./components/SingleProduct/SingleProduct.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:5000/products";
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

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                pushProducts={(data) => setProducts(data)}
              />
            }
          />
          <Route
            path="/:title"
            element={<SingleProduct products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

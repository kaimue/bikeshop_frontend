import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomProducts = () => {
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

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col">
            <Link to={product._id}>
              <div>
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
        ))}
      </div>
    </div>
  );
};
export default RandomProducts;

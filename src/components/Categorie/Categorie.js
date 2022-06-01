import React, { useEffect, useState } from "react";

function Categorie(categorie) {
  const [products, setProducts] = useState([]);
  const tagName = window.location.pathname.split("/").pop();

  console.log();
  useEffect((categorie) => {
    const getCategorie = async () => {
      const url = `http://localhost:5000/products/categorie/${tagName}`;
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
    getCategorie();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div>
          <h1>{product.title}</h1>
          <img src={product.imgUrl} alt={product.title} className="Image" />
          <p>{product.description}</p>
          <p>{product.price} €</p>
          <button className="btn btn-info" type="button">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categorie;

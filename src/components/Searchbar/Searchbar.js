import React, { useEffect, useState } from "react";

const Searchbar = ({ pushProducts }) => {
  const [wordQuery, setWordQuery] = useState("");

  useEffect(() => {
    const searchProducts = async () => {
      const url = `http://localhost:5000/products/search?q=${wordQuery}`;
      try {
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          pushProducts(data);
        } else {
          console.error("Fetch error!");
          return "No products found!!";
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    searchProducts();
  }, [wordQuery]);

  return (
    <div class="container">
      <input
        class="form-control"
        onChange={(event) => setWordQuery(event.target.value)}
        type="text"
        placeholder="Search for products ..."
      />
    </div>
  );
};
export default Searchbar;

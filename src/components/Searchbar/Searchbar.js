import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/products";

const Searchbar = () => {
  const [wordQuery, setWordQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (wordQuery.length > 1) {
      const searchProducts = async () => {
        const url = `http://localhost:5000/products/search?q=${wordQuery}`;
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            dispatch(setProducts(data));
          } else {
            console.error("Fetch error!");
            return "No products found!!";
          }
        } catch (e) {
          console.log(e.message);
        }
      };
      searchProducts();
    }
  }, [wordQuery]);

  return (
    <div className="container">
      <input
        className="form-control"
        onChange={(event) => setWordQuery(event.target.value)}
        type="text"
        placeholder="Search for products ..."
      />
    </div>
  );
};
export default Searchbar;

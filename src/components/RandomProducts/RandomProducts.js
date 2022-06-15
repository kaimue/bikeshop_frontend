import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/products";

const RandomProducts = (displayedProducts) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${process.env.APIURL}/products/randomProducts`;
      try {
        setLoading(true);
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          dispatch(setProducts(data));
          setLoading(false);
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

  const renderFunc = () => {
    if (loading) {
      return (
        <div className="container">
          <p>Site is loading...</p>
        </div>
      );
    } else if (products.length === 0) {
      return (
        <div className="container">
          <p>"No products found!!"</p>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <br></br>
          <div className="row">
            {products.map((product) => (
              <div className="col">
                <br></br>
                <Link
                  to={product._id}
                  className="list-group-item list-group-item-action"
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                  <div>
                    <h2>{product.title}</h2>
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
          <br></br>
          <br></br>
          <br></br>
        </div>
      );
    }
  };

  return <div className="container">{renderFunc()}</div>;
};
export default RandomProducts;

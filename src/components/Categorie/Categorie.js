import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/products";
import { Link } from "react-router-dom";

function Categorie() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);

  const { categorie } = useParams();

  useEffect(() => {
    const getCategorie = async () => {
      const url = `https://kais-bikeshop-backend.herokuapp.com/products/categorie/${categorie}`;
      try {
        setLoading(true);
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();
          dispatch(setProducts(data));
          setLoading(false);
        } else {
          console.error("Fetch error!");
          return "No products found!!";
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    getCategorie();
  }, [categorie]);

  return (
    <div className="container">
      {loading ? (
        <p>Site is loading...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col">
                <br></br>

                <Link
                  to={`/${product._id}`}
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
                <br></br>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
}

export default Categorie;

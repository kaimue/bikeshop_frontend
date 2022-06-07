import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/products";
import { setCart } from "../../redux/reducers/cart";
import { Link } from "react-router-dom";

function SingleProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchProducts = async () => {
      const url = `http://localhost:5000/products/single/${id}`;
      try {
        setLoading(true);
        const res = await fetch(url);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
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
    searchProducts();
  }, [id]);

  const addToCart = () => {
    const action = setCart(products);
    console.log(action);
    dispatch(setCart(products));
    console.log(cartProducts);
  };

  const displayedProducts = () => {
    if (!products) {
      return (
        <div className="container">
          <p>No products found...</p>
        </div>
      );
    } else if (!Array.isArray(products)) {
      return (
        <div className="card">
          <div className="card-header">
            <h1>{products.title}</h1>
          </div>
          <div className="card-body">
            <img src={products.imgUrl} alt={products.title} className="Image" />

            <p className="card-text">{products.description}</p>
            <p className="card-text">{products.price} €</p>

            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    } else if (Array.isArray(products)) {
      return (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div className="col">
                <Link
                  to={`/home/${product._id}`}
                  className="list-group-item list-group-item-action"
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
        </div>
      );
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p>Site is loading...</p>
      ) : (
        <div className="container">{displayedProducts()}</div>
      )}
    </div>
  );
}

export default SingleProduct;

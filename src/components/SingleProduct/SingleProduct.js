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
  const [button, setButton] = useState(true);

  useEffect(() => {
    const searchProducts = async () => {
      const url = `${process.env.REACT_APP_API_URL}products/single/${id}`;
      try {
        setLoading(true);
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();

          const singleProduct = await dispatch(setProducts(data));
          console.log(singleProduct);
          checkIfInCart(singleProduct);
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

  const checkIfInCart = (singleProduct) => {
    const check = cartProducts.find(
      (product) => product.title === singleProduct.title
    );
    console.log(check);
    if (check) {
      setButton(false);
    }
  };

  const addToCart = () => {
    const action = setCart(products);
    dispatch(action);
    setButton(false);
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
            <br></br>

            <h1>{products.title}</h1>
          </div>
          <div className="card-body">
            <img src={products.imgUrl} alt={products.title} className="Image" />

            <p className="card-text">{products.description}</p>
            <p className="card-text">{products.price} €</p>
            {button ? (
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={addToCart}
              >
                Add to cart
              </button>
            ) : (
              <Link to="/user/cart">
                <button className="btn btn-outline-dark" type="button">
                  Cart
                </button>
              </Link>
            )}
            <br></br>
            <br></br>
            <br></br>
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

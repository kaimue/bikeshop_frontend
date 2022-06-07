import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartDeleted } from "../../redux/reducers/cart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCartProductById = (id) => {
    console.log("App deleted!");
    console.log(id);
    const deleteProduct = cartProducts.filter((product) => {
      return product._id !== id;
    });
    dispatch(setCartDeleted(deleteProduct));
  };

  const checkout = () => {
    navigate("/user/checkout");
  };

  const displayedProducts = () => {
    if (cartProducts.length === 0) {
      return (
        <div className="container">
          <br></br>
          <p>There are no products in your cart</p>
        </div>
      );
    } else if (Array.isArray(cartProducts)) {
      return (
        <div className="container">
          <div className="row">
            {cartProducts.map((product) => (
              <div>
                <Link
                  to={product.title}
                  className="list-group-item list-group-item-action"
                >
                  <div className="container border">
                    <h1>{product.title}</h1>
                    <p>{product.price} €</p>
                  </div>
                </Link>
                <button
                  className="btn btn-outline-dark"
                  type="button"
                  onClick={deleteCartProductById(product._id)}
                >
                  Delete from cart
                </button>
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={checkout}
                >
                  Delete from cart
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (!Array.isArray(cartProducts)) {
      return (
        <div className="container">
          <div className="row">
            <div>
              <Link
                to={cartProducts.title}
                className="list-group-item list-group-item-action"
              >
                <div className="container border">
                  <h1>{cartProducts.title}</h1>
                  <p>{cartProducts.price} €</p>
                </div>
              </Link>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={deleteCartProductById(cartProducts._id)}
              >
                Delete from cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div>{displayedProducts()}</div>
    </div>
  );
}

export default Cart;

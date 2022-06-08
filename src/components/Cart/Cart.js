import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartDeleted } from "../../redux/reducers/cart";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const decoded = jwtDecode(token);
  console.log(decoded);

  const postOrder = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://kais-bikeshop-backend.herokuapp.com/order/order",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            products: cartProducts,
            userId: decoded.id,
          }),
        }
      );
      if (res.ok) {
        const data = await res.json();
      } else {
        console.error("Fetch error!");
        alert("There has been an error!");
      }
    } catch (error) {
      console.error(error.message);
    }
    navigate("/user/checkout");
  };

  const displayedProducts = () => {
    if (cartProducts.length === 0) {
      return (
        <div className="container">
          <br></br>
          <p>No products found...</p>
        </div>
      );
    } else if (Array.isArray(cartProducts)) {
      return (
        <div className="container">
          <br></br>
          <div>
            {cartProducts.map((product) => (
              <div>
                <ul className="list-group">
                  <Link
                    to={`/${product._id}`}
                    className="list-group-item list-group-item-action"
                  >
                    <li className="list-group-item">{product.title}</li>
                    <li className="list-group-item">{product.price} €</li>
                  </Link>
                  <li className="list-group-item">
                    <button
                      className="btn btn-outline-dark"
                      type="button"
                      onClick={() => {
                        dispatch(setCartDeleted(product._id));
                      }}
                    >
                      Delete from cart
                    </button>
                  </li>
                </ul>
                <br></br>
              </div>
            ))}
          </div>
          <br></br>
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={postOrder}
          >
            Buy now!
          </button>
        </div>
      );
    }
  };

  return <div className="container">{displayedProducts()}</div>;
}

export default Cart;

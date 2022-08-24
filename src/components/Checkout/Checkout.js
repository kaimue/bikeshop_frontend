import React from "react";
import { useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const amount = cartProducts.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 4.99);

  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "EUR",
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <br></br>
      <br></br>
      <ul>
        <div>
          {cartProducts.map((product) => (
            <div>
              <li className="list-group-item">{product.title}</li>
              <li className="list-group-item">{product.price} €</li>

              <li className="list-group-item"></li>

              <br></br>
            </div>
          ))}
        </div>
        <li className="list-group-item">Shipping costs: 4,99€</li>
        <br></br>
        <li className="list-group-item">Total Price: {amount}€</li>
        <br></br>
        <li className="list-group-item text-center">
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{
                color: "silver",
                tagline: false,
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  navigate("/user/checkout/payed");
                });
              }}
            />
          </PayPalScriptProvider>
        </li>
      </ul>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Checkout;

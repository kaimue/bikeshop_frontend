import React from "react";
import { useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const sum = cartProducts.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 4.99);
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
        <li className="list-group-item">Total Price: {sum}€</li>
        <br></br>
        <li className="list-group-item">
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "1.99",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
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

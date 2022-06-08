import React from "react";
import { useSelector } from "react-redux";

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
        <li className="list-group-item">Thanks for your purchase!</li>

        <br></br>
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
          Please pay to the PayPal address kaisbikeshop@shop.com
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

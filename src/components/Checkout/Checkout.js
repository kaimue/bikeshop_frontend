import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <div className="container">
      <p>Thanks for your purchase!</p>
      <p>Please pay to the PayPal kaisbikeshop@shop.com</p>
      <p>
        Calculate the sum yourself. It will help you to keep you brain trained.
      </p>
      <p>
        {cartProducts.products.map((product) => {
          return (
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Checkout;

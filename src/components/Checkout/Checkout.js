import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

function Checkout() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const decoded = jwtDecode(token);
  console.log(order);

  useEffect(() => {
    const getOrder = async () => {
      const url = `http://localhost:5000/order/${decoded.UserID}`;
      try {
        setLoading(true);
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setOrder(data);
          setLoading(false);
        } else {
          console.error("Fetch error!");
          return "No user found!";
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getOrder();
  }, []);

  return (
    <div className="container">
      <p>Thanks for your purchase!</p>
      <p>Please pay to the PayPal kaisbikeshop@shop.com</p>
      <p>
        Calculate the sum yourself. It will help you to keep you brain trained.
      </p>
      <p>
        {order.products.map((product) => {
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

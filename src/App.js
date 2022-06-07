import React from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct.js";
import Login from "./components/Login/Login.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart.js";
import SignUp from "./components/SignUp/SignUp.js";
import { Layout } from "./components/Layout/Layout.js";
import Categorie from "./components/Categorie/Categorie.js";
import RandomProducts from "./components/RandomProducts/RandomProducts.js";
import Profile from "./components/Profile/Profile.js";
import Protected from "./components/Protected/Protected.js";
import Checkout from "./components/Checkout/Checkout.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<RandomProducts />} />
          <Route path="home/:id" element={<SingleProduct />} />
          <Route path="home/categorie/:categorie" element={<Categorie />} />
          <Route path="/user">
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="protected" element={<Protected />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import SingleProduct from "./components/SingleProduct/SingleProduct.js";
import Login from "./components/Login/Login.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart.js";
import SignUp from "./components/SignUp/SignUp.js";
import { Layout } from "./components/Layout/Layout.js";
import RandomProducts from "./components/RandomProducts/RandomProducts.js";
import Categorie from "./components/Categorie/Categorie.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<RandomProducts />} />
          <Route path="home/:_id" element={<SingleProduct />} />
          <Route path="home/categorie/:categorie" element={<Categorie />} />
        </Route>
        <Route path="/user">
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

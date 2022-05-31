import Searchbar from "../Searchbar/Searchbar";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";
import Header from "../Header/Header";
import ProductMenu from "../ProductMenu/ProductMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Header />
        <ProductMenu />
        <Searchbar />
        <LoginButton />
        <CartButton />
      </div>
    </nav>
  );
};

export default NavBar;

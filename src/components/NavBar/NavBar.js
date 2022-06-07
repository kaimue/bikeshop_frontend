import Searchbar from "../Searchbar/Searchbar";
import CartButton from "../CartButton/CartButton";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import ProfileButton from "../ProfileButton/ProfileButton";
import Header from "../Header/Header";
import ProductMenu from "../ProductMenu/ProductMenu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav
      className="navbar navbar-expand-lg static-top"
      style={{ backgroundColor: "#292929" }}
    >
      <div className="col">
        <Header />
      </div>
      <div className="col">
        <ProductMenu />
      </div>
      <div className="col-4">
        <Searchbar />
      </div>
      {!isAuthenticated ? (
        <div className="col">
          <LoginButton />
        </div>
      ) : (
        <div className="col">
          <LogoutButton />
        </div>
      )}
      <div className="col">
        <ProfileButton />
      </div>
      <div className="col">
        <CartButton />
      </div>
    </nav>
  );
};

export default NavBar;

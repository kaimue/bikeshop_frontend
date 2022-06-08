import { Link } from "react-router-dom";

const ProductMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <Link to="/categorie/bikes">
          <button className="btn btn-outline-light col">Bikes</button>
        </Link>
        <Link to="/categorie/parts">
          <button className="btn btn-outline-light col">Parts</button>
        </Link>
      </div>
    </div>
  );
};
export default ProductMenu;

import { Link } from "react-router-dom";

const ProductMenu = () => {
  return (
    <div className="container">
      <div className="btn-group" role="group">
        <Link to="/categorie/bikes">
          <button type="button" className="btn btn-light">
            Bikes
          </button>
        </Link>
        <p>.</p>
        <Link to="/categorie/parts">
          <button type="button" className="btn btn-light">
            Parts
          </button>
        </Link>
        <p>.</p>
        <Link to="/search">
          <button className="btn btn-light" type="button">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductMenu;

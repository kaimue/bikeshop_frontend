import { Link } from "react-router-dom";

const ProductMenu = () => {
  return (
    <div className="container">
      <Link to="/home/categorie/wheelsets">
        <button className="btn btn-info">Categories</button>
      </Link>
      <Link to="/home/categorie/bikes">
        <button className="btn btn-info">Bikes</button>
      </Link>
    </div>
  );
};
export default ProductMenu;

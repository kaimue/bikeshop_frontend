import { Link } from "react-router-dom";

const ProductMenu = () => {
  return (
    <div>
      <Link to="/home/categorie/bikes">
        <button className="btn btn-outline-light">Bikes</button>
      </Link>
    </div>
  );
};
export default ProductMenu;

{
  /* <Link to="/home/categorie/wheelsets">
        <button className="btn btn-outline-dark">Bike Parts</button>
      </Link> */
}

import React, { useEffect, useState } from "react";
import { setProducts, setTotalPages } from "../../redux/reducers/products";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [wordQuery, setWordQuery] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const totalPages = useSelector((state) => state.products.totalPages);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    totalPagesArray.push(i);
  }
  console.log(totalPagesArray);

  useEffect(() => {
    setPageNumber(1);
  }, [wordQuery, totalPages]);

  useEffect(() => {
    if (wordQuery.length > 3) {
      setLoading(true);
      const searchProducts = async () => {
        const url = `${process.env.REACT_APP_API_URL}products/search?page=1&limit=5&title=${wordQuery}`;
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            dispatch(setProducts(data.results));
            dispatch(setTotalPages(data.totalPages));
            setLoading(false);
          } else {
            console.error("Fetch error!");
            return "No products found!!";
          }
        } catch (e) {
          console.log(e.message);
        }
      };
      searchProducts();
    }
  }, [wordQuery]);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <input
        className="form-control"
        onChange={(event) => setWordQuery(event.target.value)}
        type="text"
        placeholder="Search for products ..."
      />
      <br></br>
      <div className="container">
        {loading ? (
          <p>Start searching ...</p>
        ) : (
          <div>
            <div className="row">
              {products.map((product) => (
                <div className="col">
                  <br></br>

                  <Link
                    to={`/${product._id}`}
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "#f7f7f7" }}
                  >
                    <div>
                      <h2>{product.title}</h2>
                      <img
                        src={product.imgUrl}
                        alt={product.title}
                        className="prevImage"
                      />
                      <p>{product.price} €</p>
                    </div>
                  </Link>
                  <br></br>
                </div>
              ))}
            </div>

            {totalPagesArray.map((page) => (
              <ul className="pagination pagination justify-content-center">
                <li
                  className={
                    pageNumber === page ? "page-item active" : "page-item"
                  }
                >
                  <button
                    className="page-link"
                    onClick={() => setPageNumber(page)}
                  >
                    {page}
                  </button>
                </li>
              </ul>
            ))}

            <br></br>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

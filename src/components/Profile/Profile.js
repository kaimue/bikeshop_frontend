import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const decoded = "629737717fb502372a3d1540";
  console.log(`decoded:${decoded}`);

  useEffect(() => {
    const getUser = async () => {
      const url = `http://localhost:5000/user/${decoded}`;
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
          setUser(data);
          setLoading(false);
        } else {
          console.error("Fetch error!");
          return "No user found!";
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Site is loading...</p>
      ) : (
        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">First name: {user.firstName}</li>
            <li className="list-group-item">Last name: {user.lastName}</li>
            <li className="list-group-item">Email: {user.email}</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">Address:</li>
            <li className="list-group-item">City: {user.address.city}</li>
            <li className="list-group-item">
              Zip Code: {user.address.zipCode}
            </li>
            <li className="list-group-item">
              Street: {user.address.street},{user.address.houseNumber}
            </li>
          </ul>
        </div>
      )}
      <Link to="/user/signup">
        <button className="btn btn-outline-dark" type="button">
          Update my data
        </button>
      </Link>
    </div>
  );
};
export default Profile;

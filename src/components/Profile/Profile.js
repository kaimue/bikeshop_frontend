import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const decoded = jwt_decode(token);

  useEffect(() => {
    const getUser = async () => {
      const url = `http://localhost:5000/user/${decoded.id}`;
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
          <br></br>
          <ul className="list-group">
            <li className="list-group-item">First name: {user.firstName}</li>
            <li className="list-group-item">Last name: {user.lastName}</li>
            <li className="list-group-item">Email: {user.email}</li>
          </ul>
          <br></br>
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
          <br></br>
        </div>
      )}
    </div>
  );
};
export default Profile;

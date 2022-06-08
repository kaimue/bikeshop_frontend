import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const signupFunc = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://kais-bikeshop-backend.herokuapp.com/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          address: { city, zipCode, street, houseNumber },
        }),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(login({ token: data }));
        localStorage.setItem("token", data);
      } else {
        console.error("Fetch error!");
        alert("There has been an error!");
      }
    } catch (error) {
      console.error(error.message);
    }
    navigate("/home");
  };

  return (
    <div className="container">
      <br></br>
      <div className="mb-3">
        <form onSubmit={signupFunc}>
          <label htmlFor="firstName" className="form-label">
            First name:
          </label>
          <br></br>
          <input
            type="text"
            id="firstName"
            name="firstname"
            placeholder="firstname"
            onChange={(event) => setFirstName(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="lastName" className="form-label">
            Last name:
          </label>
          <br></br>
          <input
            type="text"
            id="lastName"
            name="lastname"
            placeholder="lastname"
            onChange={(event) => setLastName(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <br></br>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city"
            onChange={(event) => setCity(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="zipCode" className="form-label">
            Zip code:
          </label>
          <br></br>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="zipCode"
            onChange={(event) => setZipCode(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="street" className="form-label">
            Street:
          </label>
          <br></br>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="street"
            onChange={(event) => setStreet(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="hoseNumber" className="form-label">
            House number:
          </label>
          <br></br>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            placeholder="houseNumber"
            onChange={(event) => setHouseNumber(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <br></br>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
          />
          <br></br>
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
          />
          <br></br>
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-dark"
          />
          <br></br>
          <br></br>
          <label className="form-label">
            Already have an account? Login here.
          </label>
          <br></br>
          <Link to="/user/login">
            <button className="btn btn-outline-dark" type="button">
              Login
            </button>
          </Link>
          <br></br>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default SignUp;

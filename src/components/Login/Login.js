import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   loginFunc(email, password);
  // };

  const loginFunc = async (event) => {
    console.log("login");
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
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
    <div>
      <form onSubmit={loginFunc}>
        <label htmlFor="email">email:</label>
        <br></br>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        <label htmlFor="password">password:</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br></br>
        <input type="submit" value="Submit" />
        <br></br>
        <label htmlFor="signUp">No account yet? Sign up here.</label>
        <Link to="/user/signup">
          <button className="btn btn-info" type="button">
            Sign up
          </button>
        </Link>
        <br></br>
      </form>
    </div>
  );
};

export default Login;

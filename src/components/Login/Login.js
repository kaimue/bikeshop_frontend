import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPost(email, password);
  };

  const loginPost = async (email, password) => {
    const request = fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <br></br>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(userName, password);
  };
  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
            Password
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

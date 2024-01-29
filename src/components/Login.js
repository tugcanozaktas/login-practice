import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import Authentication from "../services/Authentication";

let auth = new Authentication();

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (formValues) => {
    const { userName, password } = formValues;
    try {
      await auth.login(userName, password);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
    // event.preventDefault();
    // console.log(userName, password);
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

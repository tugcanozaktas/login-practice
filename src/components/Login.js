import React, { useState } from "react";
import "../styles/Login.css";
import Authentication from "../services/Authentication/index";

const auth = new Authentication();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.login({ email, password });
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setEmail("");
      setPassword("");
    }
  };

  const showWelcomeMessage = () => {
    return (
      <div className="welcome-message">
        <h1>Welcome back!</h1>
        <button
          type="button"
          onClick={() => {
            auth.logout();
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      </div>
    );
  };

  return (
    <div className="login-page">
      {isLoggedIn ? (
        showWelcomeMessage()
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Email
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;

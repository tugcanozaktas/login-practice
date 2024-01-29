import React, { useState } from "react";
import "../styles/Login.css";
import Authentication from "../services/Authentication/index";
import postRegister from "../services/postRegister";

const auth = new Authentication();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event) => {
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

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await postRegister({ firstName, lastName, email, password });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      // eslint-disable-next-line no-alert
      alert("User created successfully");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
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
        <div>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">
              Email
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <form onSubmit={handleRegister}>
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

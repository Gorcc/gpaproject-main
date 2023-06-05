import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GPACalculator from "./GPACalculator";
import Personal from "./Personal";
import UserManagement from "./UserManagement";
import { getUsers } from "./userStorage";
import { encryptDES, decryptDES } from "./encryption"; // Updated import statement

const secretKey = "MySecretKey123";

const Layout = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const users = getUsers();

    const user = users.find(
      (user) =>
        user.name === username &&
        decryptDES(user.password, secretKey) === password
    );

    if (user) {
      setLoginError(false);
      const { permissions } = user;

      switch (permissions) {
        case "personal":
          navigate("/personal");
          break;
        case "sysadmin":
          navigate("/usermanagement");
          break;
        default:
          navigate("/gpacalculator");
          break;
      }
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="align">
      <h1>CMPE455 - Term Project</h1>
      <div className="grid">
        <form className="form login" onSubmit={handleSignIn}>
          <div className="form__field">
            <label htmlFor="login__username">
              <i className="fa-solid fa-users"></i>
              <svg className="icon"></svg>
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="username"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password">
              <i className="fa-solid fa-lock"></i>
              <svg className="icon"></svg>
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {loginError && <p className="error">Invalid username or password</p>}

          <div className="form__field">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Layout;

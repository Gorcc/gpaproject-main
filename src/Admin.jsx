import React from "react";
import "./App.css";
import { useNavigate, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="panelDiv">
      <h2>Logged in as Sysadmin</h2>
      <h2>Add a new user</h2>
      <a href="#">
        <Link to="/layout">Go to login screen</Link>
      </a>

      <form className="panelForm" action="">
        <div>
          <i class="fa-solid fa-square-envelope"></i>
          <input
            className="formInput"
            type="email"
            name="mail"
            placeholder="E-mail"
          />
        </div>
        <div>
          <i class="fa-solid fa-users"></i>
          <input
            className="formInput"
            type="text"
            name="id"
            placeholder="Username"
          />
        </div>
        <div>
          <i class="fa-solid fa-lock"></i>
          <input
            className="formInput"
            type="password"
            name="pw"
            id=""
            placeholder="Password"
          />
        </div>

        <select className="formInput" name="" id="">
          <option value="">Personal</option>
          <option value="">Admin</option>
          <option value="">User</option>
        </select>
        <button type="submit">SIGN NEW USER</button>
      </form>
    </div>
  );
};

export default Admin;

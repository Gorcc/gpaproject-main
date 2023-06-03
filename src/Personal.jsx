import React from "react";
import "./App.css";
import { useNavigate, Link } from "react-router-dom";

const Personal = () => {
  return (
    <div className="panelDiv">
      <h2>Logged in as Staff</h2>
      <h2>Student records</h2>
      <div className="links">
        <a href="#">
          <Link to="/layout">Go to login screen</Link>
        </a>
        <a href="#">Full student records</a>
      </div>
      <form className="panelForm" action="">
        <div>
          <i class="fa-solid fa-users"></i>
          <input
            className="formInput"
            type="text"
            name="id"
            placeholder="Username"
          />
        </div>

        <select className="formInput" name="" id="">
          <option value="4">CMPE342</option>
          <option value="4">CMPE455</option>
          <option value="4">CMPE448</option>
          <option value="4">CMPE224</option>
          <option value="4">CMPE226</option>
        </select>
        <button type="submit">ADD COURSE TO USER</button>
      </form>
    </div>
  );
};

export default Personal;

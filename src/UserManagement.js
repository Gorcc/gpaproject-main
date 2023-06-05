import React, { useState } from "react";
import { saveUser, getUsers, clearUsers } from "./userStorage";
import { Navigate, useNavigate, Link } from "react-router-dom";

const UserManagement = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSaveUser = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      password: password,
      permissions: permissions,
    };

    saveUser(user);

    setName("");
    setPassword("");
    setPermissions("");
  };

  const handleClearUsers = () => {
    clearUsers();
  };

  const users = getUsers();
  const navigate = useNavigate();

  return (
    <div className="panelDiv">
      <div className="texts">
        <h1>Logged in as a Sysadmin</h1>
        <h2>User Management</h2>
        <h1>Sign a new user</h1>
        <a href="#">
          <a href="#">
            <Link to="/layout">Go to login screen</Link>
          </a>
        </a>
      </div>
      <form className="panelForm" onSubmit={handleSaveUser}>
        <label>
          Name:
          <input
            className="formInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="formInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Permissions:
          <select
            className="formInput"
            value={permissions}
            onChange={(e) => setPermissions(e.target.value)}
          >
            <option value="">Select permission</option>
            <option value="user">User</option>
            <option value="personal">Personal</option>
            <option value="sysadmin">Sysadmin</option>
          </select>
        </label>
        <br />
        <button type="submit">Save User</button>
        <br />
        <button onClick={handleClearUsers}>Clear Users</button>
      </form>

      {users.length > 0 ? (
        <div>
          <h3>Current Users:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <strong>Name:</strong> {user.name}, <strong>Password:</strong>{" "}
                {user.password}, <strong>Permissions:</strong>{" "}
                {user.permissions}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserManagement;

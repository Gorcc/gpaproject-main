import React, { useState, useEffect } from "react";
import { getUsers } from "./userStorage";
import { useNavigate, Link } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userArray = Object.values(getUsers());
    setUsers(userArray);
  }, []);

  return (
    <div className="userList">
      <h1>User List</h1>
      <a href="#">
        <Link to="/layout">Go to login screen</Link>
      </a>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Encrypted Password</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.password}</td> <td>{user.permissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import GPACalculator from "./GPACalculator";

import Personal from "./Personal";
import UserManagement from "./UserManagement";

import "./App.css";
import UserList from "./userList";

const App = () => {
  const [options, setOptions] = useState(() => {
    const storedOptions = localStorage.getItem("options");
    return storedOptions ? JSON.parse(storedOptions) : [];
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<UserList />} />
          <Route path="layout" element={<Layout />} />
          <Route path="userlist" element={<UserList />} />

          <Route path="usermanagement" element={<UserManagement />} />
          <Route
            path="gpacalculator"
            element={<GPACalculator options={options} />}
          />
          <Route path="admin" element={<UserManagement />} />
          <Route
            path="personal"
            element={<Personal setOptions={setOptions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

/** @format */

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./screens/adminScreen";
import Login from "./screens/loginScreen";
const App = () => {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <AdminLayout />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="admin" element={<AdminScreen />} />
          <Route path="user" element={<UserScreen />} />
          <Route
            index // <-- "/"
            element={<div>Default Page Content</div>}
          />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;

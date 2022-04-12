/** @format */

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";

import Admin from "./components/Admin";

const App = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("role")));
  }, [role]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!role && <Route path="/" element={<Navigate to="/login" />} />}
          {role === "admin" && (
            <Route path="/" element={<Navigate to="/admin" />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};;
export default App;

/** @format */

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";

import Admin from "./components/Admin";
import QuestionsList from "./components/AdminManageQuestions/QuestionsList";
import User from "./components/User";
import AdminProfile from "./components/AdminProfile/Profile";
import UsersList from "./components/AdminManageUsers/UsersList";

const App = () => {
  const role = localStorage.getItem("role");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!role && <Route path="/" element={<Navigate to="/login" />} />}
          {role === "admin" && (
            <Route path="/" element={<Navigate to="/admin" />} />
          )}
          {role === "user" && (
            <Route path="/" element={<Navigate to="/user" />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="adminProfile" element={<AdminProfile />} />
            <Route path="usersList" element={<UsersList />} />
            <Route path="questionsList" element={<QuestionsList />} />
          </Route>
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};;;
export default App;

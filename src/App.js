/** @format */

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/Register";

import Admin from "./components/Admin";
import QuestionsList from "./components/AdminQuestions/QuestionsList";

const App = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    console.log(1);
    setRole(localStorage.getItem("role"));
  }, [role]);
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
            <Route path="questionsList" element={<QuestionsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};;
export default App;

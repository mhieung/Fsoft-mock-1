/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
async function loginUser(credentials) {
  return fetch(" https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(123);
    const token = await loginUser({
      username,
      password,
    });

    setToken(token);
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(123);
  //   };
  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form action="post">
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
Login.propTypes = { setToken: PropTypes.func.isRequired };

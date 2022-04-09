/** @format */

import axios from "axios";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";
export const UserLogin = (username, password) => {
  return axios
    .post(API_URL + "/v1/auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("tokens", JSON.stringify(response.data.tokens));
        console.log(response.data);
      }
      return response.data;
    });
};
export const UserRegister = (username, password, email) => {
  console.log(username);
  console.log(password);
  console.log(email);
  const data = {
    username: username,
    password: password,
    email: email,
  };
  return axios.post(API_URL + "/v1/auth/register", data);
};
export const UserLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};

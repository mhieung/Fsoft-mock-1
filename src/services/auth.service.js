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
        localStorage.setItem(
          "username",
          JSON.stringify(response.data.user.username)
        );
        localStorage.setItem("email", JSON.stringify(response.data.user.email));
        localStorage.setItem("id", JSON.stringify(response.data.user.id));
        localStorage.setItem(
          "isEmailVerified",
          JSON.stringify(response.data.user.isEmailVerified)
        );
        localStorage.setItem("role", JSON.stringify(response.data.user.role));
        localStorage.setItem(
          "access",
          JSON.stringify(response.data.tokens.access)
        );
        localStorage.setItem(
          "refresh",
          JSON.stringify(response.data.tokens.refresh)
        );
      }
      return response.data;
    })
    .catch((error) => {
      return alert("Login" + error);
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

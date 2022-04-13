/** @format */


import { axiosService } from "./axios.service";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";

export const UserLogin = (username, password) => {
  return axiosService.post(API_URL + "/v1/auth/login", {
    username: username,
    password: password,
  });
};
export const UserRegister = (payload) => {
  // const data = {
  //   username: username,
  //   password: password,
  //   email: email,
  // };
  return axiosService.post(API_URL + "/v1/auth/register", payload);
};
export const UserLogout = (payload) => {
  return axiosService.post(API_URL + "/v1/auth/logout", payload);
  // localStorage.removeItem("user");
  // localStorage.removeItem("tokens");
};
export const RefreshToken = (payload) => {
  return axiosService.post(API_URL + "/v1/auth/refresh-tokens", payload);
};

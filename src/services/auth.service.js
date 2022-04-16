/** @format */


import { axiosService } from "./axios.service";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";

export const UserLogin = (username, password) => {
  return axiosService.post(API_URL + "/v1/auth/login", {
    username: username,
    password: password,
  });
};
export const UserRegister = (username, password, email) => {
  return axiosService.post(API_URL + "/v1/auth/register", {
    username: username,
    password: password,
    email: email,
  });
};
export const UserLogout = (payload) => {
  return axiosService.post(API_URL + "/v1/auth/logout", payload);
};
export const RefreshToken = (payload) => {
  return axiosService.post(API_URL + "/v1/auth/refresh-tokens", payload);
};

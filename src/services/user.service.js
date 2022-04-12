/** @format */

import axios from "axios";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";
export const getUsers = () => {
  return axios.get(API_URL + "/v1/users");
};
export const createUser = async (payload) => {
  return axios.post(API_URL + "/v1/users", payload);
};
export const updateUser = async (idUser, payload) => {
  return axios.patch(`${API_URL + "/v1/users/"}${idUser}`, payload);
};

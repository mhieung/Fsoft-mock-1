/** @format */

import { axiosService } from "./axios.service";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";
export const getUsers = () => {
  return axiosService.get(API_URL + "/v1/users");
};
export const createUser = async (payload) => {
  return axiosService.post(API_URL + "/v1/users", payload);
};
export const updateUser = async (idUser, payload) => {
  return axiosService.patch(`${API_URL + "/v1/users/"}${idUser}`, payload);
};

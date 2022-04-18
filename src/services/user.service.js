/** @format */

import { axiosService } from "./axios.service";

export const getUsers = (params) => {
  return axiosService.get("/v1/users", { params });
};
export const createUser = async (payload) => {
  return axiosService.post("/v1/users", payload);
};
export const updateUser = async (idUser, payload) => {
  return axiosService.patch(`${"/v1/users/"}${idUser}`, payload);
};

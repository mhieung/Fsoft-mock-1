/** @format */

import axios from "axios";
import queryString from "query-string";

export const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosService.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
axiosService.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw Error;
  }
);

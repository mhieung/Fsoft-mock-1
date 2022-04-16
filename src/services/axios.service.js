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
const REFRESH_URL = "/v1/auth/refresh-tokens";
const refreshToken = async (data) => {
  const result = await axios.post(
    process.env.REACT_APP_API_URL + REFRESH_URL,
    data
  );
  return result.data;
};
axiosService.interceptors.request.use(async (req) => {
  const expires = Number(new Date(localStorage.getItem("access_expires")));
  const current = Number(new Date());
  if (expires && expires <= current) {
    const data = {
      refreshToken: localStorage.getItem("refresh"),
    };
    const result = await refreshToken(data);
    localStorage.setItem("access", result.access.token);
    localStorage.setItem("access_expires", result.access.expires);
    localStorage.setItem("refresh", result.refresh.token);

    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${result.access.token}`,
    };
    return req;
  }
  req.headers = {
    ...req.headers,
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  };
  return req;
});
axiosService.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // console.log(typeof Promise.reject(error));
    return Promise.reject(error);
  }
);
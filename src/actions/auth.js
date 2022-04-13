/** @format */

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";
import { UserLogin, UserLogout, UserRegister } from "../services/auth.service";
import { useNavigate } from "react-router-dom";
export const register = (username, password, email) => (dispatch) => {
  UserRegister(username, password, email).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const login = async (username, password) => {
  const response = await UserLogin(username, password);
  const tokens = response.tokens;
  const userInfo = response.user;
  if (tokens) {
    localStorage.setItem("access", tokens.access.token);
    localStorage.setItem("refresh", tokens.refresh.token);
    localStorage.setItem("role", response.user.role);
    localStorage.setItem("username", response.user.username);
  }
  return response;
};
export const logout = () => (dispatch) => {
  UserLogout();
  dispatch({
    type: LOGOUT,
  });
};

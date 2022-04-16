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


export const logout = () => (dispatch) => {
  UserLogout();
  dispatch({
    type: LOGOUT,
  });
};

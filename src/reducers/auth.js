/** @format */


import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
// const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: "",
  current: {},
  error: "",
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

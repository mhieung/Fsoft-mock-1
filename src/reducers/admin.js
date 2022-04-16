/** @format */

import {
  GET_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "../actions/types";

const initialState = {
  current: {},
  error: "",
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        error: "",
        current: action.payload,
      };
    case GET_QUESTION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        error: "",
        current: action.payload,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

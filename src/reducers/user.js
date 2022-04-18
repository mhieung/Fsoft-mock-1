/** @format */

import {
  USER_GET_QUESTION_FAIL,
  USER_GET_QUESTION_SUCCESS,
  USER_SUBMIT_ANSWER_FAIL,
  USER_SUBMIT_ANSWER_SUCCESS,
} from "../actions/types";

const initialState = {
  current: {},
  error: "",
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_GET_QUESTION_SUCCESS:
      return {
        ...state,
        error: "",
        current: action.payload,
      };
    case USER_GET_QUESTION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case USER_SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        error: "",
        current: action.payload,
      };
    case USER_SUBMIT_ANSWER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

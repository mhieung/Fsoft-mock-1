/** @format */
import { Button, Form, Input, Modal } from "antd";
import { adminGetQuestions } from "../services/question.service";
import { getUsers } from "../services/user.service";
import { GET_QUESTION_SUCCESS, GET_QUESTION_FAIL, SET_MESSAGE } from "./types";
export const getQuestionList = async () => {
  const response = await adminGetQuestions();
  return response;
};

export const getUsersList = async () => {
  const response = await getUsers();
  return response;
};

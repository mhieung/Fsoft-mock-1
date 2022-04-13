/** @format */

import { axiosService } from "./axios.service";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";
export const userGetQuestion = () => {
  return axiosService.get(API_URL + "/v1/questions");
};
export const userSubmitAnswer = (payload) => {
  return axiosService.post(API_URL + "/v1/questions/submit", payload);
};
export const adminCreateQuestion = async (payload) => {
  return axiosService.post(API_URL + "/v1/questions/edit", payload);
};
export const adminEditQuestion = async (idQuestion, payload) => {
  return axiosService.patch(
    `${API_URL + "/v1/questions/edit/"}${idQuestion}`,
    payload
  );
};
export const adminDeleteQuestion = async (idQuestion, payload) => {
  return axiosService.delete(
    `${API_URL + "/v1/questions/edit/"}${idQuestion}`,
    payload
  );
};
export const adminGetQuestions = async (payload) => {
  return axiosService.get(API_URL + "/v1/questions/edit", payload);
};
export const adminGetQuestionById = async (idQuestion, payload) => {
  return axiosService.get(
    `${API_URL + "/v1/questions/edit/"}${idQuestion}`,
    payload
  );
};

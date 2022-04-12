/** @format */

import axios from "axios";
const API_URL = "https://fwa-ec-quiz-mock1.herokuapp.com";
export const userGetQuestion = () => {
  return axios.get(API_URL + "/v1/questions");
};
export const userSubmitAnswer = (payload) => {
  return axios.post(API_URL + "/v1/questions/submit", payload);
};
export const adminCreateQuestion = async (payload) => {
  return axios.post(API_URL + "/v1/questions/edit", payload);
};
export const adminEditQuestion = async (idQuestion, payload) => {
  return axios.patch(
    `${API_URL + "/v1/questions/edit/"}${idQuestion}`,
    payload
  );
};
export const adminDeleteQuestion = async (idQuestion, payload) => {
  return axios.delete(
    `${API_URL + "/v1/questions/edit/"}${idQuestion}`,
    payload
  );
};
export const adminGetQuestions = async (payload) => {
  return axios.get(API_URL + "/v1/questions/edit", payload);
};
export const adminGetQuestionById = async (idQuestion, payload) => {
  return axios.get(`${API_URL + "/v1/questions/edit/"}${idQuestion}`, payload);
};

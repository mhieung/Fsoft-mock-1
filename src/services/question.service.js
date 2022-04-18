/** @format */

import { axiosService } from "./axios.service";

export const userGetQuestion = (params) => {
  return axiosService.get("/v1/questions", { params });
};
export const userSubmitAnswer = (payload) => {
  return axiosService.post("/v1/questions/submit", payload);
};
export const adminCreateQuestion = async (payload) => {
  return axiosService.post("/v1/questions/edit", payload);
};
export const adminEditQuestion = async (idQuestion, payload) => {
  return axiosService.patch(`${"/v1/questions/edit/"}${idQuestion}`, payload);
};
export const adminDeleteQuestion = async (idQuestion, payload) => {
  return axiosService.delete(`${"/v1/questions/edit/"}${idQuestion}`, payload);
};
export const adminGetQuestions = async (params) => {
  return axiosService.get("/v1/questions/edit", { params });
};
export const adminGetQuestionById = async (idQuestion, payload) => {
  return axiosService.get(`${"/v1/questions/edit/"}${idQuestion}`, payload);
};

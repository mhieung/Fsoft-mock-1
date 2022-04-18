/** @format */

import React, { useEffect, useState } from "react";
import { Radio, Space, Layout, Button, message } from "antd";
import { useDispatch } from "react-redux";
import {
  userGetQuestion,
  userSubmitAnswer,
} from "../../services/question.service";
import {
  USER_GET_QUESTION_FAIL,
  USER_GET_QUESTION_SUCCESS,
  USER_SUBMIT_ANSWER_FAIL,
  USER_SUBMIT_ANSWER_SUCCESS,
} from "../../actions/types";
import SurveyResult from "./Result";
export default function QandA() {
  const { Header, Content } = Layout;
  const dispatch = useDispatch();
  const [isDataChange, setIsDataChange] = useState(false);

  const [questionsList, setQuestionsList] = useState([]);
  const [answersList, setAnswersList] = useState([]);
  const [answerLength, setAnswerLength] = useState(1);

  useEffect(() => {
    const userGetQuestions = async () => {
      const params = {
        page: 1,
        limit: 1000,
      };
      try {
        const response = await userGetQuestion(params);
        setQuestionsList(response.results);

        dispatch({
          type: USER_GET_QUESTION_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: USER_GET_QUESTION_FAIL,
          payload: error,
        });
      }
    };
    userGetQuestions();
  }, [dispatch, isDataChange]);

  // answers
  const onChange = (e, questionId) => {
    const index = answersList.findIndex((item) => item.id === questionId);
    if (index < 0) {
      setAnswersList([
        ...answersList,
        {
          id: questionId,
          correctanswer: e.target.value,
        },
      ]);
    } else {
      const tempArr = [...answersList];
      tempArr.splice(index, 1, {
        id: questionId,
        correctanswer: e.target.value,
      });
      setAnswersList(tempArr);
    }
  };
  const checkCorrectAnswer = (questionId) => {
    const answer = answersList.find((answer) => answer.id === questionId);
    if (!answer) return;
    return answer.correctanswer;
  };
  //submit answers
  const userSubmitAnswers = async (answersArr) => {
    if (!answersArr) return;
    try {
      const response = await userSubmitAnswer(answersArr);
      dispatch({
        type: USER_SUBMIT_ANSWER_SUCCESS,
        payload: response,
      });
      setAnswersList(response);
      setIsDataChange(!isDataChange);
      message.success("Answers submitted! You are being graded");
    } catch (error) {
      console.log(error);
      message.error("Failed to submit answers, try again");
      dispatch({
        type: USER_SUBMIT_ANSWER_FAIL,
        payload: error,
      });
    }
  };
  const onSubmitAnswers = () => {
    userSubmitAnswers(answersList);
    setAnswerLength(questionsList.length);
  };
  return (
    <div>
      <Layout>
        {questionsList.length > 0 &&
          questionsList.map((question, index) => (
            <div>
              <Header style={{ background: "white", margin: "1rem" }}>
                {question.question}
              </Header>
              <Content>
                <Radio.Group
                  onChange={(e) => onChange(e, question.id)}
                  value={checkCorrectAnswer(question.id)}
                >
                  <Space direction="vertical" style={{ margin: "1rem" }}>
                    <Radio value={question.answer1}>{question.answer1}</Radio>
                    <Radio value={question.answer2}>{question.answer2}</Radio>
                    <Radio value={question.answer3}>{question.answer3}</Radio>
                    <Radio value={question.answer4}>{question.answer4}</Radio>
                  </Space>
                </Radio.Group>
              </Content>
            </div>
          ))}
      </Layout>
      <Button type="primary" onClick={onSubmitAnswers} size="large">
        Submit answers
      </Button>
      <SurveyResult answerLength={answerLength} answersList={answersList} />
    </div>
  );
}

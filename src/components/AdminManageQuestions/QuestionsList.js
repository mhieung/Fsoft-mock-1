/** @format */
import React, { useEffect, useState } from "react";
import { Table, Space, Col, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTION_FAIL, GET_QUESTION_SUCCESS } from "../../actions/types";
import {
  adminCreateQuestion,
  adminDeleteQuestion,
  adminEditQuestion,
  adminGetQuestionById,
  adminGetQuestions,
} from "../../services/question.service";
import {
  CreateQuestion,
  DeleteQuestionById,
  UpdateQuestionById,
} from "./Question";
import { getQueriesForElement } from "@testing-library/react";

export default function QuestionsList(props) {
  const dispatch = useDispatch();
  const { Column, ColumnGroup } = Table;
  // const listQuestions = useSelector((state) => state.admin.current.results);
  const [questionsList, setQuestionsList] = useState([]);
  const [pagination, setPagination] = useState({
    page: null,
    limit: null,
    totalPages: null,
    totalResults: null,
  });

  const [clickedInspect, setClickedInspect] = useState("");
  const [isDataChange, setIsDataChange] = useState(false);
  const [questionById, setQuestionById] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const onCancel = () => {
    setIsVisible(false);
    setClickedInspect("");
  };
  const onOk = () => {
    setIsVisible(false);
    setClickedInspect("");
  };
  const handleClickInspect = (questionId) => {
    setIsVisible(true);
    setClickedInspect(questionId);
  };
  const handleClickedCreate = () => {
    setIsVisible(true);
  };
  // get questions list
  useEffect(() => {
    const fetchQuestionsList = async () => {
      const params = {
        page: 1,
      };
      try {
        const response = await adminGetQuestions(params);
        setPagination({
          page: response.page,
          limit: response.limit,
          totalPages: response.totalPages,
          totalResults: response.totalResults,
        });
        setQuestionsList(response.results);
        dispatch({
          type: GET_QUESTION_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_QUESTION_FAIL,
          payload: error,
        });
      }
    }; //call api roi dispatch
    fetchQuestionsList();
  }, [dispatch, isDataChange]);

  // get question by id
  useEffect(() => {
    const getQuestionById = async () => {
      try {
        const response = await adminGetQuestionById(clickedInspect);
        await setQuestionById(response);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestionById();
  }, [clickedInspect, isDataChange]);

  //edit question
  const handleEditQuestion = async (values) => {
    try {
      await adminEditQuestion(clickedInspect, values);
      setIsVisible(false);
      setClickedInspect("");
      setIsDataChange(!isDataChange);
    } catch (error) {
      console.log(error);
    }
  };

  //add question
  const handleCreateQuestion = async (values) => {
    try {
      await adminCreateQuestion(values);
      setIsDataChange(!isDataChange);
      setIsVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  //deleteQuestion
  const handleDeleteQuestion = async (questionId) => {
    try {
      await adminDeleteQuestion(questionId);
      setIsDataChange(!isDataChange);
      setIsVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  // change page
  const handlePaginationChange = (page) => {
    const params = {
      page: page,
    };
    const fetchQuestionsList = async () => {
      try {
        const response = await adminGetQuestions(params);
        setPagination({
          page: response.page,
          limit: response.limit,
          totalPages: response.totalPages,
          totalResults: response.totalResults,
        });
        dispatch({
          type: GET_QUESTION_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_QUESTION_FAIL,
          payload: error,
        });
      }
    };
    fetchQuestionsList();
  };
  return (
    <div>
      <CreateQuestion
        isVisible={isVisible}
        onOk={onOk}
        onCancel={onCancel}
        handleClickedCreate={handleClickedCreate}
        handleCreateQuestion={handleCreateQuestion}
      />
      <Table dataSource={questionsList}>
        <Column title="Question" dataIndex="question" key="question" />
        <ColumnGroup title="Answers">
          <Column title="Answer 1" dataIndex="answer1" key="answer1" />
          <Column title="Answer 2" dataIndex="answer2" key="answer2" />
          <Column title="Answer 3" dataIndex="answer3" key="answer3" />
          <Column title="Answer 4" dataIndex="answer4" key="answer4" />
          <Column
            title="Correct Answer"
            dataIndex="correctanswer"
            key="correctanswer"
          />
          <Column
            title="Action"
            render={(record) => (
              <Space direction="horizontal">
                <UpdateQuestionById
                  isVisible={isVisible}
                  questionId={record.id}
                  questionById={questionById}
                  handleClickInspect={handleClickInspect}
                  onOk={onOk}
                  onCancel={onCancel}
                  handleEditQuestion={handleEditQuestion}
                />
                <DeleteQuestionById
                  handleDeleteQuestion={handleDeleteQuestion}
                  questionId={record.id}
                />
              </Space>
            )}
            key="id"
          />
        </ColumnGroup>
      </Table>
      <Pagination
        className="pagination"
        defaultCurrent={pagination.page}
        total={pagination.totalResults}
        hideOnSinglePage
        onChange={handlePaginationChange}
      />
    </div>
  );
}

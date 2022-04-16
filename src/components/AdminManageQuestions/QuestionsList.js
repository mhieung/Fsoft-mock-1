/** @format */
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  Select,
  Table,
  Space,
  Col,
  Pagination,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GET_QUESTION_FAIL, GET_QUESTION_SUCCESS } from "../../actions/types";
import { adminGetQuestions } from "../../services/question.service";
import { AddEditQuestion, QuestionBox } from "./Question";

export default function QuestionsList(props) {
  const dispatch = useDispatch();

  // const listQuestions = useSelector((state) => state.admin.current.results);
  const [questionsList, setQuestionsList] = useState([]);
  const [pagination, setPagination] = useState({
    page: null,
    limit: null,
    totalPages: null,
    totalResults: null,
  });
  const [isModalAddEditVisible, setIsModalAddEditVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [clickedAddEditId, setClickedAddEditId] = useState("");
  const [clickedDeleteId, setClickedDeleteIdId] = useState("");
  const [dataQuestion, setDataQuestion] = useState({});
  const [isDataChange, setIsDataChange] = useState(false);
  const dataSource = [...questionsList];
  console.log(dataSource);

  const handleAddEditCancel = () => {
    setIsModalAddEditVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsModalDeleteVisible(false);
  };
  const onClickEdit = (idQuestion) => {
    setIsModalAddEditVisible(true);
    setClickedAddEditId(idQuestion);
  };
  const onClickDelete = (idQuestion) => {
    setIsModalDeleteVisible(true);
    setClickedDeleteIdId(idQuestion);
  };
  const { Column, ColumnGroup } = Table;
  const adminAction = [
    {
      updateAction: "update",
      deleteAction: "delete",
    },
  ];
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
      <Table dataSource={questionsList}>
        {/* <QuestionBox questionsList={questionsList}  /> */}
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
            // dataIndex="id"
            render={(id) => <QuestionBox idQuestion={id} />}
            key="id"
          />
        </ColumnGroup>
      </Table>

      {/* <Pagination
          className="pagination"
          defaultCurrent={pagination.page}
          total={pagination.totalResults}
          hideOnSinglePage
          onChange={handlePaginationChange}
        /> */}
    </div>
  );
}

/** @format */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestionList } from "../../actions/admin";

export default function QuestionsList(props) {
  const dispatch = useDispatch();
  const [questionsList, setQuestionsList] = useState([]);
  const [isModalAddEditVisible, setIsModalAddEditVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [clickedAddEditId, setClickedAddEditId] = useState("");
  const [clickedDeleteId, setClickedDeleteIdId] = useState("");
  const [dataQuestion, setDataQuestion] = useState({});
  const [isDataChange, setIsDataChange] = useState(false);

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
  useEffect(() => {
    async function fetchQuestion() {
      try {
        const result = await getQuestionList();
        console.log("result:", result);
        return result;
      } catch (error) {
        console.log(error);
        return error;
      }
    } //call api roi dispatch
    fetchQuestion();
  }, [dispatch]);
  return <div>hello</div>;
}

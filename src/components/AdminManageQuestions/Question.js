/** @format */

import { Button, Input, Modal, Select, Table, Space, Col } from "antd";
import React, { useState } from "react";

export const QuestionBox = (props) => {
  const { idQuestion } = props;
  console.log(idQuestion);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [question, setQuestion] = useState({});

  const handleShow = () => {
    // setQuestion(question);
    setIsVisible(true);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleOK = () => {
    setIsVisible(false);
    setDisabled(true);
  };

  const handleUpdateQuestion = () => {
    setDisabled(false);
  };
  const { Option } = Select;
  const selectBefore = (
    <Select
      defaultValue="question1"
      className="select-before"
      disabled={isDisabled}
    >
      <Option value="question1">question1</Option>
      <Option value="question2">question2</Option>
      <Option value="question3">question3</Option>
      <Option value="question4">question4</Option>
    </Select>
  );
  const selectAfter = (answer) => {
    const checkCorrect = () => {
      if (question.correctanswer === answer) return "correct";
      else return "incorrect";
    };
    return (
      <Select defaultValue={checkCorrect()} className="select-after">
        <Option value="incorrect">incorrect</Option>
        <Option value="correct">correct</Option>
      </Select>
    );
  };

  return (
    <div>
      <Button onClick={handleShow}>Test</Button>
      {/* <Button onClick={handleShow()}></Button> */}
      <Modal visible={isVisible} onCancel={handleCancel} onOk={handleOK}>
        <Space direction="vertical">
          <Input
            addonBefore={selectBefore}
            placeholder="Enter a question"
            disabled={isDisabled}
            value={question.question}
          />
          <Input
            addonBefore="answer1"
            addonAfter={selectAfter(question.answer1)}
            placeholder="answer1"
            disabled={isDisabled}
            value={question.answer1}
          />
          <Input
            addonBefore="answer2"
            addonAfter={selectAfter(question.answer2)}
            placeholder="answer2"
            disabled={isDisabled}
            value={question.answer2}
          />
          <Input
            addonBefore="answer3"
            addonAfter={selectAfter(question.answer3)}
            placeholder="answer3"
            disabled={isDisabled}
            value={question.answer3}
          />
          <Input
            addonBefore="answer4"
            addonAfter={selectAfter(question.answer4)}
            placeholder="answer4"
            disabled={isDisabled}
            value={question.answer4}
          />
          <div direction="horizontal">
            <Button
              type="primary"
              onClick={handleUpdateQuestion}
              style={{ margin: "1rem" }}
            >
              Update question
            </Button>
            <Button type="primary" style={{ backgroundColor: "red" }}>
              Delete question
            </Button>
          </div>
        </Space>
      </Modal>
    </div>
  );
};

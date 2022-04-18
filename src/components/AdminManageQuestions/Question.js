/** @format */

import { Button, Input, Modal, Form, Space } from "antd";
import React from "react";

export const CreateQuestion = (props) => {
  const { handleCreateQuestion } = props;
  return (
    <Space direction="vertical">
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        autoComplete="off"
        onFinish={handleCreateQuestion}
      >
        <Form.Item
          labelCol={12}
          name="question"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input addonBefore="Question" placeholder="Create a new question!" />
        </Form.Item>

        <Form.Item
          name="answer1"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input addonBefore="Answer 1" placeholder="Enter answer 1" />
        </Form.Item>

        <Form.Item
          name="answer2"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input addonBefore="Answer 2" placeholder="Enter answer 2" />
        </Form.Item>

        <Form.Item
          name="answer3"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input addonBefore="Answer 3" placeholder="Enter answer 3" />
        </Form.Item>

        <Form.Item
          name="answer4"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input addonBefore="Answer 4" placeholder="Enter answer 4" />
        </Form.Item>

        <Form.Item
          name="correctanswer"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <Input
            addonBefore="Correct answer "
            placeholder="Correct answer is"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
export const UpdateQuestionById = (props) => {
  const {
    questionId,
    questionById,
    handleClickInspect,
    isVisible,
    onCancel,
    onOk,
    handleEditQuestion,
  } = props;

  return (
    <div>
      <Button type="primary" onClick={(e) => handleClickInspect(questionId)}>
        Edit
      </Button>

      <Modal visible={isVisible} onCancel={onCancel} onOk={onOk}>
        <Space direction="vertical">
          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            autoComplete="off"
            onFinish={handleEditQuestion}
          >
            <Form.Item
              labelCol={12}
              name="question"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Question"
                // placeholder="Enter a question"

                placeholder={questionById.question}
              />
            </Form.Item>

            <Form.Item
              name="answer1"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Answer 1"
                placeholder={questionById.answer1}
              />
            </Form.Item>

            <Form.Item
              name="answer2"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Answer 2"
                placeholder={questionById.answer2}
              />
            </Form.Item>

            <Form.Item
              name="answer3"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Answer 3"
                placeholder={questionById.answer3}
              />
            </Form.Item>

            <Form.Item
              name="answer4"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Answer 4"
                placeholder={questionById.answer4}
              />
            </Form.Item>

            <Form.Item
              name="correctanswer"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input
                addonBefore="Correct answer "
                placeholder={questionById.correctanswer}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
              <Space direction="horizontal">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Modal>
    </div>
  );
};

export const DeleteQuestionById = (props) => {
  const { handleDeleteQuestion, questionId } = props;
  return (
    <div>
      <Button type="danger" onClick={(e) => handleDeleteQuestion(questionId)}>
        Delete
      </Button>
    </div>
  );
};
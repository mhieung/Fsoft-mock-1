/** @format */

/** @format */

import { Button, Input, Modal, Form, Space, Select } from "antd";
import React, { useState } from "react";

export const CreateUser = (props) => {
  const { handleAddUser } = props;
  const [role, setRole] = useState("user");
  const { Option } = Select;

  function handleChange(value) {
    setRole(value);
  }

  const onFinish = (values) => {
    handleAddUser({ ...values, role: role });
  };
  return (
    <Space direction="vertical">
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <label htmlFor="username">
            User Name
            <Input placeholder="username" />
          </label>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <label htmlFor="password">
            Password
            <Form.Item
              style={{ marginBottom: "0" }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="password" />
            </Form.Item>
          </label>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "required!",
            },
          ]}
        >
          <label htmlFor="email">
            Email
            <Input type="email" placeholder="email" />
          </label>
        </Form.Item>

        <Form.Item name="role">
          <label htmlFor="role">
            Role
            <div>
              <Select defaultValue="user" onChange={handleChange}>
                <Option value="user">User</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </div>
          </label>
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
export const UpdateUserById = (props) => {
  const {
    isVisible,
    onCancel,
    onOk,
    userData,
    handleUpdateUser,
    handleClickEdit,
    userId,
  } = props;
  const onFinish = (values) => {
    handleUpdateUser(values);
  };
  return (
    <div>
      <Button type="primary" onClick={(e) => handleClickEdit(userId)}>
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
            onFinish={onFinish}
          >
            <Form.Item
              name="avatar"
              rules={[
                {
                  required: true,
                  message: "required!",
                },
              ]}
            >
              <Input addonBefore="Avatar" placeholder={userData.avatar} />
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

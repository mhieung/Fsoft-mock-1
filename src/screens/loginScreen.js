/** @format */

import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import PropTypes from "prop-types";
async function loginUser(credentials) {
  return fetch(" https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(123);
    const token = await loginUser({
      username,
      password,
    });

    setToken(token);
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(123);
  //   };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          onChange={(e) => setUserName(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  // <div className="login-wrapper">
  //   <h1>Login</h1>
  //   <form action="post">
  //     <label>
  //       <p>Username</p>
  //       <input type="text" onChange={(e) => setUserName(e.target.value)} />
  //     </label>
  //     <label>
  //       <p>Password</p>
  //       <input
  //         type="password"
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </label>
  //     <div>
  //       <button onClick={handleSubmit}>Submit</button>
  //     </div>
  //   </form>
  // </div>
}
Login.propTypes = { setToken: PropTypes.func.isRequired };

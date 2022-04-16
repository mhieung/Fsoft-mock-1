/** @format */

import React, { useState } from "react";
import { Form, Input, Checkbox, Button, Row } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserRegister } from "../services/auth.service";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

function Register() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    // dispatch(register(username, password, email));
    try {
      const response = await UserRegister(username, password, email);
      const tokens = response.tokens;
      const userInfo = response.user;
      if (tokens) {
        localStorage.setItem("access", tokens.access.token);
        localStorage.setItem("refresh", tokens.refresh.token);
        localStorage.setItem("role", response.user.role);
        localStorage.setItem("username", response.user.username);
        localStorage.setItem("avatar", response.user.avatar);
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response,
      });
      alert("Register successs");
    } catch (error) {
      const value = "Register Failed";
      dispatch({
        type: REGISTER_FAIL,
        payload: value,
      });
      alert(value);
    }
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <div>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Form {...formItemLayout} name="register">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            onChange={onChangeUsername}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            onChange={onChangePassword}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
            onChange={onChangeEmail}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Button type="link" htmlType="button" onClick={routeChange}>
              Already have an account? Log in
            </Button>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={handleRegister}>
              Register
            </Button>
            {/* <Button type="link" htmlType="button" onClick={routeChange}>
              Login
            </Button> */}
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default Register;

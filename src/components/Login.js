/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";
import { UserLogin } from "../services/auth.service";
const background = "../asset/background";

const Login = () => {
  // const message = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const routeChangeRegister = () => {
    let path = `/register`;
    navigate(path);
  };
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  // const [fail, setFail] = useState("");

  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await UserLogin(username, password);
      const tokens = response.tokens;
      const userInfo = response.user;
      if (tokens) {
        localStorage.setItem("access", tokens.access.token);
        localStorage.setItem("access_expires", tokens.access.expires);
        localStorage.setItem("refresh", tokens.refresh.token);
        localStorage.setItem("role", response.user.role);
        localStorage.setItem("username", response.user.username);
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      if (userInfo.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error,
      });
      console.log(error.message);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{
            remember: false,
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
            onChange={onChangeUsername}
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
            onChange={onChangePassword}
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
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Submit
            </Button>
            <Button type="link" htmlType="button" onClick={routeChangeRegister}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};
export default Login;

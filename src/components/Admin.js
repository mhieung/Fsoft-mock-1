/** @format */

import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import QuestionsList from "./AdminManageQuestions/QuestionsList";
import { UserLogout } from "../services/auth.service";
import { USER_LOGOUT } from "../constants/userConstants";
import UsersList from "./AdminManageUsers/UsersList";
import AdminProfile from "./AdminProfile/Profile";

function Admin() {
  // const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const onClickProfile = () => {
    setContent(<AdminProfile />);
  };
  const onClickUsersList = () => {
    setContent(<UsersList />);
  };
  const onClickQuestionsList = () => {
    setContent(<QuestionsList />);
  };
  const onClickLogOut = async (e) => {
    e.preventDefault();
    try {
      const refresh = localStorage.getItem("refresh");
      const data = {
        refreshToken: refresh,
      };
      const response = await UserLogout(data);
      dispatch({
        type: USER_LOGOUT,
        payload: response,
      });
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div style={{ float: "right" }}>
            <Button type="primary" htmlType="submit" onClick={onClickLogOut}>
              Logout
            </Button>
          </div>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["account"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item
                key="1"
                icon={<SettingOutlined />}
                onClick={onClickProfile}
              >
                <Link to="/admin/adminProfile "> Profile</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UserOutlined />}
                onClick={onClickUsersList}
              >
                <Link to="/admin/usersList "> Users List</Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<QuestionCircleOutlined />}
                onClick={onClickQuestionsList}
              >
                <Link to="/admin/questionsList "> Questions List</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {content}
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content> */}
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;

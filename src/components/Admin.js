/** @format */

import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import QuestionsList from "./AdminQuestions/QuestionsList";

function Admin() {
  // const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const dispatch = useDispatch();
  const [content, setContent] = useState();
  const onClickProfile = () => {
    setContent(<h1>profile</h1>);
  };
  const onClickUsersList = () => {
    setContent(<h1>users list</h1>);
  };
  const onClickQuestionsList = () => {
    setContent(<QuestionsList />);
  };
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
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
                <Link to="/admin "> Profile</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UserOutlined />}
                onClick={onClickUsersList}
              >
                <Link to="/admin "> Users List</Link>
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

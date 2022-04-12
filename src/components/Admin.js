/** @format */

import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { adminGetQuestionById } from "../services/question.service";
function Admin() {
  // const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  const [isModalAddEditVisible, setIsModalAddEditVisible] = useState(false);
  const [isDataChange, setIsDataChange] = useState(false);
  const handleAddEditCancel = () => {
    setIsModalAddEditVisible(false);
  };

  const dispatch = useDispatch();
  const handleAddQuestion = async (values) => {
    try {
      await adminGetQuestionById(values);
      setIsDataChange(!isDataChange);
      setIsModalAddEditVisible(false);
    } catch (error) {
      console.log("failed: ", error);
    }
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
              <Menu.Item key="1" icon={<SettingOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                Users List
              </Menu.Item>
              <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
                Questions List
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
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

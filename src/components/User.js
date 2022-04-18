/** @format */
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import QandA from "./UserQandA/QandA";
import SurveyResult from "./UserQandA/Result";
import { Link, useNavigate } from "react-router-dom";
import { QuestionCircleOutlined, SolutionOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { UserLogout } from "../services/auth.service";
import { USER_LOGOUT } from "../constants/userConstants";

function User() {
  const { Header, Sider } = Layout;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = useState();

  const onclickQuestion = () => {
    setContent(<QandA />);
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
                icon={<QuestionCircleOutlined />}
                onClick={onclickQuestion}
              >
                <Link to="/user/questions "> Questions</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>{content}</Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default User;

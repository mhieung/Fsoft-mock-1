/** @format */

import React, { useEffect, useState } from "react";
import { Table, Space, Pagination } from "antd";
import { useDispatch } from "react-redux";
import { CreateUser, UpdateUserById } from "./Users";
import { createUser, getUsers, updateUser } from "../../services/user.service";
import { GET_USER_FAIL, GET_USER_SUCCESS } from "../../actions/types";

export default function UsersList() {
  const { Column } = Table;

  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: null,
    totalPage: null,
    totalResults: null,
  });
  const [isDataChange, setIsDataChange] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [clickEditUser, setClickEditUser] = useState("");
  const onCancel = () => {
    setIsVisible(false);
    setClickEditUser("");
  };
  const onOk = () => {
    setIsVisible(false);
    setClickEditUser("");
  };
  const handleClickEdit = (userId) => {
    setIsVisible(true);
    setClickEditUser(userId);
  };

  //get list user
  useEffect(() => {
    const fetchUsersList = async () => {
      const params = {
        page: 1,
      };
      try {
        const response = await getUsers(params);
        setPagination({
          page: response.page,
          limit: response.limit,
          totalPage: response.totalPages,
          totalResults: response.totalResults,
        });
        setUsersList(response.results);
        dispatch({
          type: GET_USER_SUCCESS,
          payload: response,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_USER_FAIL,
          payload: error,
        });
      }
    };
    fetchUsersList();
  }, [dispatch, isDataChange]);
  //add user
  const handleAddUser = async (userData) => {
    await createUser(userData);
    setIsDataChange(!isDataChange);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //update user
  const handleUpdateUser = async (urlImg) => {
    try {
      await updateUser(clickEditUser, urlImg);
      setIsDataChange(!isDataChange);
      setIsVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  // pagination
  const handlePaginationChange = (pageNumber) => {
    const fetchUsersList = async () => {
      const params = {
        page: pageNumber,
      };
      try {
        const response = await getUsers(params);
        setPagination({
          page: response.page,
          limit: response.limit,
          totalPage: response.totalPages,
          totalResults: response.totalResults,
        });
        setUsersList(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersList();
  };
  return (
    <div>
      <Space direction="horizontal">
        <Space direction="vertical">
          <h1>Add a new User</h1>
          <CreateUser handleAddUser={handleAddUser} />
        </Space>
        <Table
          dataSource={usersList}
          pagination={{
            defaultCurrent: 1,
            total: pagination.totalResults,
            onChange: handlePaginationChange,
          }}
        >
          <Column
            title="Avatar"
            render={(record) => (
              <img
                src={record.avatar}
                style={{
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            )}
            // dataIndex="avatar"
            key="avatar"
          />
          <Column title="Username" dataIndex="username" key="username" />
          <Column title="Role" dataIndex="role" key="role" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Action"
            render={(record) => (
              <UpdateUserById
                isVisible={isVisible}
                userId={record.id}
                userData={record}
                onOk={onOk}
                onCancel={onCancel}
                handleClickEdit={handleClickEdit}
                handleUpdateUser={handleUpdateUser}
              />
            )}
            key="id"
          />
        </Table>
      </Space>
    </div>
  );
};


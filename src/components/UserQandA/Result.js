/** @format */

import React from "react";
import { Table } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

function SurveyResult(props) {
  const { answersList, answerLength } = props;
  const columns = [
    {
      title: "ID Question",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Your Answer",
      dataIndex: "correctanswer",
      key: "correctanswer",
    },
    {
      title: "Result",
      key: "result",
      dataIndex: "result",
      render: (result) => (
        <>
          {result ? (
            <div>
              <CheckCircleOutlined
                style={{ color: "green", marginRight: "0.5rem" }}
              />
              True
            </div>
          ) : (
            <div>
              <CloseCircleOutlined
                style={{ color: "red", marginRight: "0.5rem" }}
              />
              False
            </div>
          )}
        </>
      ),
    },
  ];
  return (
    <div>
      <div>
        {answersList.length === answerLength && (
          <div style={{ margin: "6rem" }}>
            <h1>Your Result</h1>
            <Table
              key={answersList.id}
              columns={columns}
              dataSource={answersList}
              pagination={false}
            />
          </div>
        )}
        {answersList.length < answerLength && <></>}
      </div>
    </div>
  );
}

export default SurveyResult;

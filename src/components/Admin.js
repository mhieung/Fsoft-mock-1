/** @format */

import React, { useEffect, useState } from "react";
import { getUser } from "../services/user.service";

function Admin() {
  const [content, setContent] = useState(" ");
  useEffect(
    () => {
      getUser().then((response) => {
        setContent(response.data);
      });
    },
    // (error) => {
    //   setContent(() => {
    //     (error.response &&
    //       error.response.data &&
    //       error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   });
    // },
    [content, setContent]
  );

  return <div>{content}</div>;
}

export default Admin;

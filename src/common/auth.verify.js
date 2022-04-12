/** @format */
import React from "react";
import { withRouter } from "./withRouter";

const parseJwt = (token) => {
  try {
    console.log(JSON.parse(atob(token.split(".")[1])));
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const AuthVerify = (props) => {
  props.history.listen(() => {
    const access = JSON.parse(localStorage.getItem("access"));
    const refresh = JSON.parse(localStorage.getItem("refresh"));
    if (access) {
      const decodedJwt = parseJwt(access);
      if (decodedJwt.expires * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });
  return <div></div>;
};
export default withRouter(AuthVerify);

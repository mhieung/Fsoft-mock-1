/** @format */

import { combineReducers } from "redux";
import auth from "./auth";
import admin from "./admin";
import user from "./user";

const rootReducer = combineReducers({
  auth,
  admin,
  user,
});

export default rootReducer;

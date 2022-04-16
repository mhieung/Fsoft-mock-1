/** @format */

import { combineReducers } from "redux";
import auth from "./auth";
import admin from "./admin";

const rootReducer = combineReducers({
  auth,
  admin,
});

export default rootReducer;

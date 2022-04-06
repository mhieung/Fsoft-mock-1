/** @format */

import { combineReducers } from "redux";
import { userRegisterReducer, userLoginReducer } from "./userReducers";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;

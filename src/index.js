/** @format */

import "antd/dist/antd.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import postsReducer from "./redux/reducers/posts.Reducers";
import mySaga from "./redux/sagas";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: postsReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(mySaga);
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import "semantic-ui-css/semantic.min.css";

/* MIDDLEWARE */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();

/* DEFAULT STATE */
const defaultStore = {
  categories: [],
  posts: [],
  comments: []
};

/* CREATE STORE */
const store = createStore(
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware))
);

/* INSTANTIATE APP */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

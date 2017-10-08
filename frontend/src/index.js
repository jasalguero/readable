import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultStore = {
  categories: [],
  posts: [],
  comments: []
};

const store = createStore(
  rootReducer,
  defaultStore,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./index";
import { BrowserRouter } from "react-router-dom";
import './styles.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

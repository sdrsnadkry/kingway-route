import React from "react";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";


import store from "./redux/store";
import App from "./index";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />

        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import Day2 from "./day2/index";
import Header from "./components/header";

import store from './redux/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Day2 /> */}

    <Provider store={store}>
      <Header />
    </Provider>
  </React.StrictMode>
);

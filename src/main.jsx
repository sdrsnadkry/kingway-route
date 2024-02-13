import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./styles.css";
// import App from "./index.jsx";
import Navbar from "./navbar.jsx";
import RouteMain from "./browserRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    
      <RouteMain />
      {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import authReducer from "./slice/authSlice";
import counterReducer from "./slice/counterSlice";
import productReducer from "./slice/productSlice";

export default configureStore({
    reducer: {
        userReducer: {},
        authReducer,
        productReducer: productReducer,
        counterReducer: counterReducer,
    },
    middleware: () => [thunk],
});
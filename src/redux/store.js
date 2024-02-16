import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import counterReducer from "./slice/counterSlice";
import productReducer from "./slice/productSlice";

export default configureStore({
    reducer: {
        userReducer: {},
        productReducer: productReducer,
        counterReducer: counterReducer,
    },
    middleware: () => [thunk],
});
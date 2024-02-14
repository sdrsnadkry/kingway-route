import { configureStore } from "@reduxjs/toolkit";

import productReducer from './slice/productSlice'
import counterReducer from './slice/counterSlice'

export default configureStore({
    reducer: {
        userReducer: {},
        // productReducer,
        productReducer: productReducer,
        counterReducer: counterReducer,
    },
});
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: [{
        list: [],
    }, ],
    reducers: {
        setProductsToStore: (state, action) => {
            return {
                ...state,
                list: action.payload,
            };
        },
    },
});

export const { setProductsToStore } = productSlice.actions;

export default productSlice.reducer;
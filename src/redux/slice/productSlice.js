import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        lists: [],
    },
    reducers: {
        //actions bancha eslai
        addProduct: (state, action) => {
            console.log(action.payload, "payload")
                // {type: "", payload: data}
            state.lists = action.payload;
        },
        removeProduct: (state, action) => {
            console.log(action.payload, "payload")
                // {type: "", payload: data}
            state.lists = [];
        },
    },
});

// export const removeProduct = productSlice.actions.removeProduct
// export const addProduct = productSlice.actions.addProduct

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
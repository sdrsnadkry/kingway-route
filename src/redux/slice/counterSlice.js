import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.count = state.count + action.payload;
        }
    }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer
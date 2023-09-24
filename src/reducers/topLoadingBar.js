import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progressStart: false,
};

const topLoadingBarSlice = createSlice({
    name: "topLoadingBar",
    initialState,
    reducers: {
        start: (state, action) => {
            state.progressStart = action.payload
        },

        stop: (state, action) => {
            state.progressStart = action.payload
        },

    },
});

export const { increment, reset } = topLoadingBarSlice.actions;

export default topLoadingBarSlice.reducer;
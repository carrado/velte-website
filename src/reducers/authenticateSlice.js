import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const authenticateSlice = createSlice({
    name: 'authenticateSlice',
    initialState,
    reducers: {
        SET_USER_DATA: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { SET_USER_DATA } = authenticateSlice.actions;

export default authenticateSlice.reducer
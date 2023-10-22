import authenticateSlice from "@/reducers/authenticateSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userData: authenticateSlice
    },
});

export default store;

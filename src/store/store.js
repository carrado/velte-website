import { configureStore } from "@reduxjs/toolkit";
import topLoadingBar from "@/reducers/topLoadingBar";

const store = configureStore({
    reducer: {
        todo: topLoadingBar,
    },
});

export default store;

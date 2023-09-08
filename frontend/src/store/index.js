import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from "./reducers/userReducers";
import { countReducer } from "./reducers/countReducers";

const store = configureStore({
    reducer: {
        count: countReducer,
    },
});

export default store;
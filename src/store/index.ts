import { configureStore } from "@reduxjs/toolkit";
import AuthReducers from "./slices/AuthSlice";


export const store = configureStore({
    reducer: {
        auth: AuthReducers
    }
})


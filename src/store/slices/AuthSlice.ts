import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseService } from "../../api/baseService";


const initialState = {
    isLogin: false,
    isLoading : true
}

export const checkLogin = createAsyncThunk(
    'auth/checkLogin',
    async () => {
        const response = await baseService.getAll("check")
        return response
    }

)


const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers:{
        login: (state) => {
            state.isLogin = true
            state.isLoading = false
        },
        logout: (state) => {
            state.isLogin = false
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(checkLogin.fulfilled, (state, action) => {
            state.isLogin = true
            state.isLoading = false
        })

        builder.addCase(checkLogin.rejected, (state, action) => {
            state.isLogin = false
            state.isLoading = false
        })

        builder.addCase(checkLogin.pending, (state, action) => {
            state.isLoading = true
        })

    }
})


export default authSlice.reducer
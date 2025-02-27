import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../redux/ApiServices";

// Async thunk for login
export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
    try {
        const res =  await apiService.login(credentials);
        localStorage.setItem('auth_token', res.token);
        let token = localStorage.getItem('auth_token')
        localStorage.setItem('auth_token', res.token);
        return res
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for fetching user
export const fetchUser = createAsyncThunk("user/fetchUser", async (_, { rejectWithValue }) => {
    try {
        return await apiService.fetchUser();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

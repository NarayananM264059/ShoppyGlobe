import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register action
export const register = createAsyncThunk('auth/register', async (userData) => {
    const response = await axios.post('/api/register', userData);
    return response.data;
});

// Login action
export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    const response = await axios.post('/api/login', { email, password });
    return response.data; 
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handle login cases
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; 
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            })
            // Handle registration cases
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                // You might want to log the user in automatically after registration
                state.user = action.payload; 
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            });
    },
});

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        login: (state, action) => {
            // Handle login logic
        },
        logout: (state) => {
            // Handle logout logic
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

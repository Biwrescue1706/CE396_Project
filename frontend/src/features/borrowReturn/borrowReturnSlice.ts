import { createSlice } from '@reduxjs/toolkit';

const borrowReturnSlice = createSlice({
    name: 'borrowReturn',
    initialState: {},
    reducers: {
        borrow: (state, action) => {
            // Handle borrow logic
        },
        return: (state, action) => {
            // Handle return logic
        }
    }
});

export const { borrow, return } = borrowReturnSlice.actions;
export default borrowReturnSlice.reducer;

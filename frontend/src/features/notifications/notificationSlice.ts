import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: [],
    reducers: {
        addNotification: (state, action) => {
            state.push(action.payload);
        },
        removeNotification: (state, action) => {
            return state.filter(notification => notification.id !== action.payload.id);
        }
    }
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

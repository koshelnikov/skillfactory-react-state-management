import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [],
    isLoading: false
}

export const counterSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        loadMessage: (state) => {
            state.isLoading = true;
        },

        addMessage: (state, action) => {
            state.messages.push({id: action.payload.id, message: action.payload.message});
            state.isLoading = false;
        },

        markAsRead: (state, action) => {
            const id = action.payload;
            state.messages.forEach((item) => {
                if (item.id === id) {
                    item.isRead = !item.isRead
                }
            })
        }
    },
})

export const { loadMessage, addMessage, markAsRead } = counterSlice.actions

export default counterSlice.reducer
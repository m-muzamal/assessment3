import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

export const dataSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },

        clearData: state => {
            state.data = [];
        },
    },
});

export const { addData, clearData } = dataSlice.actions;

export default dataSlice.reducer;

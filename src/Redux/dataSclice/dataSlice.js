import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    searchData: [],
};

export const dataSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },

        addSearch: (state, action) => {
            state.searchData.push(action.payload);
        },

        clearSearchData: state => {
            state.searchData = [];
        },

        clearData: state => {
            state.data = [];
        },
    },
});

export const { addData, clearData, addSearch, clearSearchData } = dataSlice.actions;

export default dataSlice.reducer;

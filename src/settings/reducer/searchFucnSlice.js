
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchQuery: ''
    },


    reducers: {
        handleChange(state, action){
            state.searchQuery = action.payload.toLowerCase();
        }
    }


})


export const searchSliceActions = searchSlice.actions;

export default searchSlice;
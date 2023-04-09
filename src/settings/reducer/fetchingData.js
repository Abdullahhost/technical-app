
import { createSlice } from '@reduxjs/toolkit';

import Data from '../../features/data/data.json'

const fatchingSlice = createSlice({
    name: 'fatching',
    initialState: {
        jsonData:  JSON.parse(localStorage.getItem('myData'))  ||  Data,
    },
    reducers : {
        dataStutas(state){
            console.log(state.jsonData);
        }
    }
})
 
export const fatchingSliceActions = fatchingSlice.actions;

export default fatchingSlice;
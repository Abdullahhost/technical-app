
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducer/modalSlice";
import formSlice from "../reducer/formhandleSlice";
import fatchingSlice from "../reducer/fetchingData";
import searchSlice from "../reducer/searchFucnSlice";
import returnSlice from "../reducer/handleReturnProduct";


const store = configureStore({
    reducer: {
        form: formSlice.reducer,
        search: searchSlice.reducer,
        modal: modalSlice.reducer,
        fatching: fatchingSlice.reducer,
        return: returnSlice.reducer
    }
})

export default store;


import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        bookModal: false,
        finalBookModal: false,
        returnBookModal: false,
        finalReturnBookModal: false,
        openSlider: false,
    },

    reducers:{
        openBookModal(state){
            if(state.returnBookModal === true || state.finalBookModal === true || state.finalReturnBookModal === true){
                state.bookModal = false
            }else{
                state.bookModal =  !state.bookModal
              
            }
        },
        openReturnModal(state){
            
            if(state.bookModal === true || state.finalBookModal === true || state.finalReturnBookModal === true){
                state.returnBookModal = false
            }else{
                state.returnBookModal = !state.returnBookModal
            }
        },
        toogleBookModal(state){
          
            state.bookModal = !state.bookModal
        },
        toogleFinalBookModal(state){
          
            state.finalBookModal = !state.finalBookModal
        },
        toogleReturn(state){
            state.returnBookModal = !state.returnBookModal
        },
        toogleFinalReturn(state){
            state.finalReturnBookModal = !state.finalReturnBookModal
        },
        toogleSlider(state){
            state.openSlider = !state.openSlider
        },
        toogleAndOpen(state){
            state.finalBookModal =!state.finalBookModal 
            state.bookModal = !state.bookModal
        },
        toogleAndOpenReturn(state){
            state.finalReturnBookModal =!state.finalReturnBookModal 
            state.returnBookModal = !state.returnBookModal
        }
    }

})

export const modalSliceActions = modalSlice.actions;

export default modalSlice;
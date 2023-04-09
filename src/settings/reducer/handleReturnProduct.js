
import {createSlice} from '@reduxjs/toolkit';


const returnSlice = createSlice({
    name: 'return',

    initialState: {
        productName: '',
        totalPrice:  '',
        mileage: ''
    },

    reducers: {
        handleChange(state, action){
            state.productName = action.payload;   
        },

        returnProduct(state){
            const rentData = JSON.parse(localStorage.getItem('rentInfo'));
            const filter = rentData.filter((el) => el.name === state.productName)
            
            const totalPrice = filter.map((el) => el.totalPrice)
            const mileage = filter.map((el) => el.mileage)

            state.totalPrice = totalPrice
            state.mileage = mileage

        },
        finalReturnProduct(state){
            const filtertwo = JSON.parse(localStorage.getItem('rentInfo'))
            
            const findforDelete = filtertwo.filter((element) => element.name !== state.productName)
            const findfroStore = filtertwo.filter((element) => element.name === state.productName);
            
            if(findforDelete){
                localStorage.setItem('rentInfo', JSON.stringify(findforDelete))
            }if(findfroStore){
                const fullData = JSON.parse(localStorage.getItem('myData'))
                const myObject = findfroStore.reduce((accumulator, currentValue) => {
                    accumulator[currentValue.id] = currentValue;
                    return accumulator;
                  });
                const updateData = [...fullData , myObject]

                localStorage.setItem('myData', JSON.stringify(updateData))
            }

            
            window.location.reload();


        }
    }
})

export const returnSliceActions = returnSlice.actions;

export default returnSlice;
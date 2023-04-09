
import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
    name: 'form',

    initialState: {
        startingDate: '',
        endingDate: '',
        productPrice: '',
        productName: '',
        productId: null,
        calculatePrice: '',
        productBookingList: () => {
            const storedData = localStorage.getItem('rentInfo') 
            return storedData ? JSON.parse(storedData) : []
        }
        },

    reducers: {
        handleStartingDate(state, action){
            const firstDate = action.payload;
            state.startingDate = firstDate;
        },
        handleEndingDate(state, action){
            const lastDate = action.payload;
            state.endingDate = lastDate;
        },
        handleChange( state, action){
            const event = action.payload;
           
            const value = event.target.value;
            const productname = event.target.options[event.target.selectedIndex].text;

            state.productPrice = value;
            state.productName = productname;
     
        },
        rentCalculation(state){
            
            const fromDate = new Date(state.startingDate);
            const toDate = new Date(state.endingDate); 
            
            const calculateDate = Math.abs(toDate - fromDate);
            const differanceDate = Math.floor(calculateDate / (60 * 60 * 24 * 1000));
            const calculatePrice = differanceDate * state.productPrice;
            
            // state.perchaseDetails = filter
            
            const filter = JSON.parse(localStorage.getItem('myData')).filter((element) => element.name === state.productName);
            const filtertwo = JSON.parse(localStorage.getItem('myData')).filter((element) => element.name !== state.productName);

            localStorage.setItem('myData', JSON.stringify(filtertwo))
            const data1 = filter[0].name;
            const data2 = filter[0].price;
            const data3 = filter[0].id;
            const data4 = filter[0].type;
            const data5 = filter[0].mileage;
            const data6 = filter[0].durability;
            const data7 = filter[0].availability;
            const data8 = filter[0].needing_repair;

            const recordItem = {
                availability: data7, 
                needing_repair: data8, 
                id: data3,
                name: data1,
                price: data2,
                type : data4, 
                mileage : data5, 
                durability : data6, 
                totalPrice: calculatePrice,
                date: new Date().getDate()
            };

            const newItem = [...state.productBookingList() , recordItem] 
            localStorage.setItem('rentInfo', JSON.stringify(newItem))
            state.calculatePrice = calculatePrice;


        }

    }
})

export const formSliceActions = formSlice.actions;
export default formSlice;
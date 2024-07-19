import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CartReducer from "./Slices/CartSlice"

// configure store creates global store where all the centerlised data is stored
export const store = configureStore({
    // object reducer where all slices are listed
    reducer:{
        // key is same as name given in slice
        cart: CartSlice,
    },
})
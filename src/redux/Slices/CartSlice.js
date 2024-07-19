
// everything is syntax
import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // action.payload represents input parameter
        add:(state, action) => {
            state.push(action.payload);
        },
        remove:(state, action) => {
            return state.filter( (item) => item.id !== action.payload)
        },
    }
})

// Action creators are generated for each case reducer function
export const{add, remove} = CartSlice.actions

export default CartSlice.reducer
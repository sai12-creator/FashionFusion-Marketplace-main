import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : null,
    filterData : null,
}
export const productsSlice = createSlice({
    name : "product",
    initialState,

    reducers : {
        addProducts : (state , action) =>{
            state.products = action.payload;
        },
        addFilterData : (state , action) =>{
            state.filterData = action.payload
        },

    }
})

export const {addProducts , addFilterData } = productsSlice.actions
export default productsSlice.reducer
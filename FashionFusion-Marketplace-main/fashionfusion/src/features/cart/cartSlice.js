import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProduct : [],
    totalPrice : 0,
    orderTotal : 0,
    wishListProduct : [],
}
export const cartSlice = createSlice ({
    name : "cart",
    initialState,
    reducers : {
        addProductInCart : (state , action) => {
            const existProduct = state.cartProduct.findIndex(p => p.id === action.payload.id)
            if(existProduct !== -1){
                state.cartProduct[existProduct].quantity += 1;
            }else{
                state.cartProduct.push(action.payload)
            }         
        },
        decreaseProductQuantity : (state , action) => {
            const existProduct = state.cartProduct.findIndex(p => p.id === action.payload.id)
            if(existProduct !== -1){
                state.cartProduct[existProduct].quantity -= 1;
            }
        },
        deleteMyCartItem : (state , action)=>{
            state.cartProduct = state.cartProduct.filter(product => product.id !== action.payload);
        },
        deleteProductFromCart : (state , action) => {
            state.cartProduct = state.cartProduct.filter(product => product.id !== action.payload);
        },
        addPrice : (state, action) =>{
            state.totalPrice =action.payload;
        },
        addAllTotalPrice : (state , action) => {
            state.orderTotal = action.payload
        },
        addProductInWishList : (state , action) => {
            const existProduct = state.wishListProduct.findIndex(p => p.id === action.payload.id)
            if(existProduct === -1){
                state.wishListProduct.push(action.payload);
            }
        },
        deleteProductFromWishList : (state , action) => {
            state.wishListProduct = state.wishListProduct.filter(product => product.id !== action.payload);
        }

    }
})

export const { addProductInCart  , deleteProductFromCart , decreaseProductQuantity , deleteMyCartItem , addPrice  , addAllTotalPrice  , addProductInWishList ,deleteProductFromWishList} = cartSlice.actions
export default cartSlice.reducer 
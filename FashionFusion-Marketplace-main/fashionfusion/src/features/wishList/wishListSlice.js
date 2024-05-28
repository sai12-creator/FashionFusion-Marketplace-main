

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     wishListProduct : [],
// }
// export const wishListSlice = createSlice ({
//     name : "wishList",
//     initialState,
//     reducers : {
//         addProductInWishList : (state , action) => {
//             const existProduct = state.wishListProduct.findIndex(p => p.id === action.payload.id)

//             if(existProduct === -1){
//                 state.wishListProduct.push(action.payload);
//             }
//         },
//     }
// })

// export const { addProductInWishList} = wishListSlice.actions
// export default wishListSlice.reducer 

import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice.js'
import productReducer from '../features/products/productsSlice.js'
import languageReducer from '../features/language/languageSlice.js'
import cartReducer from '../features/cart/cartSlice.js'
export const store = configureStore({
  reducer: {
    user : userReducer, 
    product : productReducer,
    language : languageReducer,
    cart : cartReducer,
  },
})
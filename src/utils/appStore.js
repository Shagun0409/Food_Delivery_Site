import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';

const appstore = configureStore({
  reducer: {
    cart: cartReducer
    
  },
});
export default appstore; 
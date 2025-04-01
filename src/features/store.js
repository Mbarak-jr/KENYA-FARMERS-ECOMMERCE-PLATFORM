// src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import productsReducer from './products/productsSlice';
import ordersReducer from './orders/ordersSlice';
import transportReducer from './transport/transportSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
    transport: transportReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

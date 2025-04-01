// src/features/orders/ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder, removeOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;

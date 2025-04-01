// src/features/transport/transportSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transports: [],
};

const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    addTransport: (state, action) => {
      state.transports.push(action.payload);
    },
    removeTransport: (state, action) => {
      state.transports = state.transports.filter(transport => transport.id !== action.payload);
    },
    setTransports: (state, action) => {
      state.transports = action.payload;
    },
  },
});

export const { addTransport, removeTransport, setTransports } = transportSlice.actions;
export default transportSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 10,
};
const counterSlice = createSlice({
  name: "counnter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

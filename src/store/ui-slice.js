import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui-slice",
  initialState: { isCartShown: false },
  reducers: {
    toggleCart: (state) => {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export default uiSlice;

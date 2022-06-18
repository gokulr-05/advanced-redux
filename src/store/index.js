import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

let store = configureStore({
  reducer: {
    uiSliceReducer: uiSlice.reducer,
    cartSliceReducer: cartSlice.reducer,
  },
});

export default store;

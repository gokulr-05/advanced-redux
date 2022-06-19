import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartSlice",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem: (state, action) => {
      console.log(state.items, state.totalQuantity);
      console.log(action);
      let id = action.payload.id;
      let price = action.payload.price;
      let name = action.payload.name;

      console.log(id, name, price);

      let existingItem = state.items.find((val, index) => {
        return val.id === id;
      });

      console.log("existingItem=", existingItem);

      if (!existingItem) {
        let newItem = {
          id: id,
          name: name,
          price: price,
          quantity: 1,
          totalPrice: price,
        };
        state.items = [...state.items, newItem];
        ++state.totalQuantity;

        console.log(state.items);
      } else {
        ++existingItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem: (state, action) => {
      let [item] = state.items.filter((val) => {
        return val.id === action.payload.id;
      });

      let qty = item.quantity;
      if (qty === 1) {
        state.items = state.items.filter((val) => {
          return val.id !== action.payload.id;
        });
      } else {
        --item.quantity;
        item.totalPrice = item.totalPrice - item.price;
      }
    },
  },
});

export default cartSlice;

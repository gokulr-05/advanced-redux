import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartSlice",
  initialState: { items: [], totalQuantity: 0, isChanged: false },
  reducers: {
    replaceItem: (state, action) => {
      console.log("items in replaceItem: ", action.payload);
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.isChanged = false;
    },

    addItem: (state, action) => {
      console.log(state.items, state.totalQuantity);
      console.log(action);
      state.isChanged = true;
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
        state.totalQuantity = state.totalQuantity + newItem.quantity;

        console.log(state.items);
      } else {
        ++existingItem.quantity;
        ++state.totalQuantity;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem: (state, action) => {
      state.isChanged = true;
      let [item] = state.items.filter((val) => {
        return val.id === action.payload.id;
      });

      let qty = item.quantity;
      if (qty === 1) {
        --state.totalQuantity;
        state.items = state.items.filter((val) => {
          return val.id !== action.payload.id;
        });
      } else {
        --state.totalQuantity;
        --item.quantity;
        item.totalPrice = item.totalPrice - item.price;
      }
    },
  },
});

export default cartSlice;

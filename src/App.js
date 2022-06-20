import "./App.css";
import Header from "./component/header/Header";
import Cart from "./component/cart/Cart";
import Products from "./component/products/Products";
import uiSlice from "./store/ui-slice";
import store from "./store";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../src/store/cart-slice";

let isInitial = true;
let count = 1;

function App() {
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => {
    return state.cartSliceReducer.items;
  });
  let totQty = useSelector((state) => {
    return state.cartSliceReducer.totalQuantity;
  });

  let cartVisibility = useSelector((state) => {
    return state.uiSliceReducer.isCartShown;
  });

  useEffect(() => {
    let func = async () => {
      let response = await fetch(
        "https://advanced-redux-b752b-default-rtdb.firebaseio.com/redux.json"
      );

      let data = await response.json();

      console.log("data=", data);
      dispatch(
        cartSlice.actions.replaceItem({
          items: data.items,
          totalQuantity: data.totalQuantity,
        })
      );
    };

    func();
  }, []);

  useEffect(() => {
    if (!isInitial) {
      fetch(
        "https://advanced-redux-b752b-default-rtdb.firebaseio.com/redux.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cartItems, totalQuantity: totQty }),
        }
      );
    } else {
      isInitial = false;
    }
  }, [cartItems, totQty]);

  return (
    <div>
      <Header />
      {cartVisibility && <Cart />}

      <Products />
    </div>
  );
}

export default App;

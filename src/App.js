import "./App.css";
import Header from "./component/header/Header";
import Cart from "./component/cart/Cart";
import Products from "./component/products/Products";
import uiSlice from "./store/ui-slice";
import store from "./store";

import { useSelector, useDispatch } from "react-redux";

function App() {
  let cartVisibility = useSelector((state) => {
    return state.uiSliceReducer.isCartShown;
  });

  return (
    <div>
      <Header />
      {cartVisibility && <Cart />}

      <Products />
    </div>
  );
}

export default App;

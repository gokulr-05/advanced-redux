import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  let dispatch = useDispatch();
  let items = useSelector((state) => {
    return state.cartSliceReducer.items;
  });
  console.log("items=", items);
  return (
    <div className="cart-sec">
      <h2>Your Shopping Cart</h2>
      {items.map((val) => {
        return (
          <div className="inner-cart-sec-1" key={val.id}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h3>{val.name}</h3>
              </div>
              <p className="m-0">{`$${val.totalPrice.toFixed(
                2
              )}($${val.price.toFixed(2)}/item)`}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0 fs-3">{`*${val.quantity}`}</p>
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-primary">
                  <b>+</b>
                </button>
                <button className="btn btn-primary">
                  <b>-</b>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

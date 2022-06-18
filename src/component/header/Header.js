import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import uiSlice from "../../store/ui-slice";

const Header = () => {
  let dispatch = useDispatch();
  let uiSliceActions = uiSlice.actions;

  let cartVisibilityHandler = (e) => {
    // e.preventDefault();
    dispatch(uiSliceActions.toggleCart());
  };

  return (
    <div className="header-area">
      <div className="header-sec">
        <div className="d-flex align-items-center ">
          <h1 className="m-0 p-0">Redux Cart</h1>
        </div>
        <div className="d-flex align-items-center">
          <button
            onClick={(e) => {
              cartVisibilityHandler(e);
            }}
            className="btn btn-danger"
          >
            My Cart{" "}
            <span className="badge rounded-pill text-bg-primary px-3 py-2">
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../store/cart-slice";

const Products = () => {
  let dispatch = useDispatch();
  let DUMMY_DATA = [
    { id: 1, name: "Item 1", price: 6, description: "This is a good product" },
    {
      id: 2,
      name: "Item 2",
      price: 10,
      description: "This is a awesome product",
    },
    { id: 3, name: "Item 3", price: 2, description: "This is a nice product" },
    { id: 4, name: "Item 4", price: 30, description: "This is a cool product" },
  ];

  let addCartHandler = (id, name, price) => {
    dispatch(cartSlice.actions.addItem({ id, name, price }));
  };

  return (
    <div className="products-area">
      <h2 className="text-capitalize text-center">
        Buy your favourite products
      </h2>
      {DUMMY_DATA.map((val) => {
        return (
          <div className="products-sec" key={val.id}>
            <div className="products-inner-sec-1">
              <h2 className="text-capitalize m-0">{val.name}</h2>
              <p className="badges rounded-pill px-3 py-2 text-bg-primary m-0">
                ${val.price.toFixed(2)}
              </p>
            </div>
            <p className="text-white mt-4 text-capitalize">{val.description}</p>
            <div className="cart-btn-container">
              <button
                className="text-capitalize btn btn-primary "
                onClick={() => {
                  addCartHandler(val.id, val.name, val.price);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

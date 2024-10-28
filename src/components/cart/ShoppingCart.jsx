/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "../../redux/features/cart/cartSlice";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";


const ShoppingCart = ({ product }) => {
  const { img, quantity, price, name } = product;
  const totalPrice = Number(quantity * price).toFixed(2);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecrease = (item) => {
    dispatch(removeOneFromCart(item));
  };
  return (
    <React.Fragment>
      <div className=" w-full border-b-2 border-slate-300 mb-5">
        <div className="m-1 grid grid-cols-3 gap-2">
          <figure className="">
            <img className="w-1/4 rounded" src={img} alt="" />
          </figure>
          <div className="">
            <span className="font-semibold ">{name.slice(0, 15)}</span>
            <h2 className="text-center text-sm font-semibold text-red-600">
              <i className="fa-solid fa-bangladeshi-taka-sign"></i>
              <span> {totalPrice}</span>
            </h2>
          </div>

          <div>
            <div className="flex justify-center items-start">
              <button
                className="mx-5 text-red-500"
                onClick={() => handleRemove(product)}
              >
              <CiCircleRemove />
              </button>
              <h2 className="text-sm font-medium">Remove </h2>
            </div>

            <div className="mb-2 flex justify-center items-center">
              <button className="mx-2" onClick={() => handleDecrease(product)}>
              <FaMinusCircle />
              </button>
              <h2 className="text-sm bg-base-200 px-2 py-1 font-semibold rounded border-2 border-slate-300">
                {quantity}
              </h2>
              <button className="mx-2" onClick={() => handleIncrease(product)}>
              <IoIosAddCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;

import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartElements = ({ img, title, price, amount, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center ... mb-5 ">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div href="#" className="flex justify-evenly ...">
          <img className="p-8 rounded-t-lg h-40" src={img} alt={title} />
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            {" "}
            <BsChevronDown />
          </button>
          <p>{amount}</p>
          <button
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            <BsChevronUp />
          </button>
        </div>

        <div className="px-5 pb-5">
          <a href="http://localhost:3000/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              &#8377; {price}
            </span>
            <a
              href="http://localhost:3000/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
          className="text-red-500"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartElements;

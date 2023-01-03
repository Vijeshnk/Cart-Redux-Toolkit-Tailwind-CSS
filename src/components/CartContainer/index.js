import React from "react";
import Cartelements from "../Cartelements/index";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section>
        <header>
          <h1>cart is empty</h1>
        </header>
      </section>
    );
  }

  return (
    <section>
      <header>
        <h1>Your Cart</h1>
      </header>
      <div>
        {cartItems.map((item) => (
          <Cartelements key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <h4>Total &#8377; {total} </h4>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

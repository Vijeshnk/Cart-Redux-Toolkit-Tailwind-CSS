import React from "react";
import Cartelements from "../Cartelements/index";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  console.log(cartItems, "cartItems");

  if (amount < 1) {
    return <h1>cart is empty</h1>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map(({ id, title, price, img }) => (
        <Cartelements
          key={id}
          img={img}
          title={title}
          price={price}
          amount={amount}
        />
      ))}
      <footer>
        <hr />
        <h4>Total &#8377; {total} </h4>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Clear Cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;

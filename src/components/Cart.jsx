import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>

      <button>Checkout</button>

      <button>Continue Shopping</button>

    </div>
  );
}

export default Cart;



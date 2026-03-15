import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem({ item }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const increase = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const remove = () => {
    dispatch(removeItem(item.id));
  };

  const totalCost = item.price * item.quantity;

  const totalCartAmount = cartItems.reduce(
    (total, plant) => total + plant.price * plant.quantity,
    0
  );

  return (
    <div className="cart-item">

      <img src={item.image} alt={item.name} width="120" />

      <h3>{item.name}</h3>

      <p>Unit Price: ${item.price}</p>

      <div>
        <button onClick={decrease}>-</button>
        <span> {item.quantity} </span>
        <button onClick={increase}>+</button>
      </div>

      <p>Total: ${totalCost}</p>

      <button onClick={remove}>Remove</button>

      <hr />

      <h2>Total Cart Amount: ${totalCartAmount}</h2>

      <div>

        <button onClick={() => alert("Checkout Successful!")}>
          Checkout
        </button>

        <button onClick={() => navigate("/products")}>
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default CartItem;


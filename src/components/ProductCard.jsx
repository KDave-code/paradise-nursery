import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice.jsx";

function ProductCard({ plant }) {

  const dispatch = useDispatch();

  return (
    <div>

      <img src={plant.image} alt={plant.name} width="150"/>

      <h3>{plant.name}</h3>

      <p>${plant.price}</p>

      <button onClick={() => dispatch(addItem(plant))}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;

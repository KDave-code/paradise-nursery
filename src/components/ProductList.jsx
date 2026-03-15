import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "/images/snakeplant.jpg" },
      { id: 2, name: "Peace Lily", price: 18, image: "/images/peacelily.jpg" },
      { id: 3, name: "Spider Plant", price: 12, image: "/images/spiderplant.jpg" },
      { id: 4, name: "Aloe Vera", price: 10, image: "/images/aloevera.jpg" },
      { id: 5, name: "ZZ Plant", price: 20, image: "/images/zzplant.jpg" },
      { id: 6, name: "Rubber Plant", price: 22, image: "/images/rubberplant.jpg" }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose", price: 14, image: "/images/rose.jpg" },
      { id: 8, name: "Tulip", price: 16, image: "/images/tulip.jpg" },
      { id: 9, name: "Lavender", price: 18, image: "/images/lavender.jpg" },
      { id: 10, name: "Hibiscus", price: 13, image: "/images/hibiscus.jpg" },
      { id: 11, name: "Sunflower", price: 15, image: "/images/sunflower.jpg" },
      { id: 12, name: "Marigold", price: 11, image: "/images/marigold.jpg" }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { id: 13, name: "Tulsi", price: 10, image: "/images/tulsi.jpg" },
      { id: 14, name: "Mint", price: 8, image: "/images/mint.jpg" },
      { id: 15, name: "Neem", price: 12, image: "/images/neem.jpg" },
      { id: 16, name: "Lemongrass", price: 9, image: "/images/lemongrass.jpg" },
      { id: 17, name: "Ashwagandha", price: 14, image: "/images/ashwagandha.jpg" },
      { id: 18, name: "Basil", price: 11, image: "/images/basil.jpg" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart([...addedToCart, plant.id]);
  };

  return (
    <div className="product-list">
      {plantsArray.map((category, index) => (
        <div key={index} className="plant-category">
          <h2>{category.category}</h2>

          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} width="150" />
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>

                <button
                  disabled={addedToCart.includes(plant.id)}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


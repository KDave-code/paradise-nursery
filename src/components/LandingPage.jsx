import React, { useState } from "react";
import ProductList from "./ProductList";
import "../App.css";

function LandingPage() {

  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">

      <h1>Welcome to Paradise Nursery</h1>

      {!showProducts && (
        <button onClick={() => setShowProducts(true)}>
          Get Started
        </button>
      )}

      {showProducts && <ProductList />}

    </div>
  );
}

export default LandingPage;
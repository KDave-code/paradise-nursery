import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div>

      <Navbar />

      {!showProducts ? (
        <div className="landing">
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={handleGetStarted}>
            Get Started
          </button>

          <LandingPage />
        </div>
      ) : (
        <ProductList />
      )}

    </div>
  );
}

export default App;

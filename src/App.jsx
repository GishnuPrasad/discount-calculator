import { useState } from "react";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const discountAmount = price && discount
    ? (price * discount) / 100
    : 0;

  const finalPrice = price
    ? price - discountAmount
    : 0;

  const clearData = () => {
    setPrice("");
    setDiscount("");
  };

  return (
    <div className="app">

      <div className="calculator">

        <div className="heading">
          <h1>
            <span>Discount</span> Calculator
          </h1>
          <p>Calculate your savings instantly</p>
        </div>

        <div className="input-group">
          <label>Original Price (₹)</label>

          <div className="input-box">
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span>₹</span>
          </div>
        </div>

        <div className="input-group">
          <label>Discount (%)</label>

          <div className="input-box">
            <input
              type="number"
              placeholder="Enter discount percentage"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <span>%</span>
          </div>
        </div>

        <div className="results">

          <div className="result save">
            <p>You Save</p>
            <h2>₹ {discountAmount.toFixed(2)}</h2>
          </div>

          <div className="result final">
            <p>Final Price</p>
            <h2>₹ {finalPrice.toFixed(2)}</h2>
          </div>

        </div>

        <button onClick={clearData}>
          Clear
        </button>

      </div>

    </div>
  );
}

export default App;
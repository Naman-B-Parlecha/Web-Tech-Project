import React, { useState, useEffect } from "react";
import "./Item.scss";

export default function Item({ img, price, name, desp, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, []);

  function decrementHandler() {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function incrementHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function ChangeHandler(e) {
    const value = +e.target.value;
    setQuantity(isNaN(value) ? 1 : value);
  }
  function addCart() {
    addToCart(quantity);
  }
  return (
    <li>
      <img src={img} alt="food image" />
      <h2 className="title-name">{name}</h2>
      <p className={"desp"}>{desp}</p>
      <div className="details">
        <div className="pricing">
          <p className="price">
            <span>price -</span>₹{price}
          </p>
          <div className="quantity">
            <button onClick={decrementHandler}>-</button>
            <input
              className="input-number"
              type="number"
              value={quantity}
              onChange={ChangeHandler}
              inputMode="numeric"
            />
            <button onClick={incrementHandler}>+</button>
          </div>
        </div>
        <div className="add">
          <button onClick={addCart}>Add to cart</button>
        </div>
      </div>
    </li>
  );
}

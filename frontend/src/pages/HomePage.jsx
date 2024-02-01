import React, { useState } from "react";
import { BsHddStack } from "react-icons/bs";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { DUMMY_DATA, ALL_DATA } from "../DUMMY_DATA.js";
import Item from "../components/Item.jsx";

export default function HomePage() {
  const [cartItem, setCartItem] = useState(null);
  const navigator = useNavigate();
  function PageChange() {
    navigator("/cart");
  }

  return (
    <div className="main-container">
      <header>
        <p className="project-name">Web Tech</p>
        <input type="text" placeholder={"search"} />
        <button className="search">search</button>
        <button className="filters-btn">
          <BsHddStack />
        </button>
        <button className="cart" onClick={PageChange}>
          Cart
        </button>
      </header>
      <div className="one-liner">
        <h1>Order Food Online</h1>
        <p className="line">
          Here are some of our favourite wholesome dishes,
          <br /> Bringing your favorites right to your doorstep, because
          convenience is just a tap away!
        </p>
      </div>
      <div className="featured">
        <h2 className="featured-header">Featured Dishes</h2>
        <ul>
          {DUMMY_DATA.map((item) => (
            <Item
              desp={item.desp}
              name={item.name}
              img={item.img}
              price={item.price}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="featured">
        <h2 className="featured-header">All Dishes</h2>
        <ul>
          {ALL_DATA.map((item) => (
            <Item
              desp={item.desp}
              name={item.name}
              img={item.img}
              price={item.price}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

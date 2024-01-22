import React from "react";
import Item from "../components/Item";
import "./HomePage.scss";
import { DUMMY_DATA } from "../DUMMY_DATA.js";
export default function HomePage() {  
  return (
    <div className="main-container">
      <header>
        <h2>Web Tech Proj</h2>
        <button>Cart</button>
      </header>
      <div className="filters"> 
        <button className={"selected"}>all</button>
        <button className={"unselected"}>indian</button>
        <button className={"unselected"}>rice</button>
        <button className={"unselected"}>veg</button>
      </div>
      <div className="items">
        <ul>
          {DUMMY_DATA.map((item) => {
            return (
              <Item
                img={item.img}
                name={item.name}
                desp={item.desp}
                price={item.price}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

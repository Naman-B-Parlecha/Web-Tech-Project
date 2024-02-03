import React, { useEffect, useRef, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { DUMMY_DATA, ALL_DATA } from "../DUMMY_DATA.js";
import Item from "../components/Item.jsx";
import axios from "axios";

export default function HomePage({uid, cartItem, setCartItem}) {
  const filteredItems = useRef();
  
  const navigator = useNavigate();
  const searchItem = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const [allitems, setAllItems] = useState([]);
  useEffect(() => {
    async function getAllItems() {
      const res = await axios.get("http://localhost:3001/api/v1/dishes");
      console.log(res);
      setAllItems(res.data);
    }
    getAllItems();

  }, []);
  function PageChange() {
    if(uid==="")
      navigator("/");
    else
      navigator("/cart");
  }

  function addToCart(item, quantity) {
    if (!cartItem.find((cartItem) => cartItem.id === item.id))
      setCartItem((prev) => [...prev, { dishid: parseInt(item.id), quantity: quantity }]);
  }

  function Searching() {
    filteredItems.current = allitems.filter(
      (item) =>
        item.name.toLowerCase() === searchItem.current.value.toLowerCase()
    );
    console.log(filteredItems.current);
    if (searchItem.current.value === "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    if (filteredItems.current.length === 0) {
      setIsSearching(false);
      alert(`no food with name ${searchItem.current.value} found`);
    }
    searchItem.current.value = "";
  }
  function removeHandler() {
    setIsSearching(false);
  }
  console.log(cartItem);
  console.log(uid);
  return (
    <div className="main-container">
      <header>
        <p className="project-name">Web Tech</p>
        {isSearching && <button className="filters-btn" onClick={removeHandler}>
        <BiArrowBack />
        </button>}
        <input type="text" placeholder={"search"} ref={searchItem} />
        <button className="search" onClick={Searching}>
          search
        </button>
        <button className="filters-btn">
          <BsSliders />
        </button>
        <button className="cart" onClick={PageChange}>
          Cart({cartItem.length})
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
      {!isSearching && (
        <div className="featured">
          <h2 className="featured-header">Featured Dishes</h2>
          <ul>
            {DUMMY_DATA.map((item) => (
              <Item
                addToCart={(quantity) => {
                  addToCart(item, quantity);
                }}
                desp={item.desp}
                name={item.name}
                img={item.img}
                price={item.price}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      )}
      {!isSearching && (
        <div className="featured">
          <h2 className="featured-header">All Dishes</h2>
          <ul>
            {allitems.map((item) => (
              <Item
                addToCart={(quantity) => {
                  addToCart(item, quantity);
                }}
                desp={item.desp}
                name={item.name}
                img={item.img}
                price={item.price}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      )}

      {isSearching && (
        <div className="featured">
          <h2 className="featured-header">Searched Dish</h2>
          <ul>
            {filteredItems.current.map((item) => (
              <Item
                addToCart={(quantity) => {
                  addToCart(item, quantity);
                }}
                desp={item.desp}
                name={item.name}
                img={item.img}
                price={item.price}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

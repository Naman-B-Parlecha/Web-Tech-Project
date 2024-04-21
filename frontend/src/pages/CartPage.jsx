import "./CartPage.scss";
import CartItem from "../components/cartItem.jsx";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export default function CartPage({ uid, cart, setCart }) {
  const navigator = useNavigate();
  const [price, setPrice] = useState([0]);
  const [itemDetails, setItemDetails] = useState([]);
  function NavigateHome() {
    navigator("/home");
  }
  const getDetails = async (dishid) => {
    try {
      const response = await axios.get(`https://web-tech-project-backend.vercel.app/api/v1/dishes/${dishid}`);
      return (response.data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };
  useEffect(() => {
    const fetchItemDetails = async () => {
      const itemDetailsPromises = cart.map((e) => getDetails(e.dishid));
      const resolvedItemDetails = await axios.all(itemDetailsPromises);
      setItemDetails(resolvedItemDetails);
      setPrice(resolvedItemDetails.map((e,index) => e.price*cart[index].quantity));
    };
    fetchItemDetails();

  }, [cart]);

  return (
    <div className="container">
      <header className="cartHeader">
        <h2 className="project-name">Web Tech</h2>
        <h1 className="your-cart">Your Cart</h1>
        <div className="button-div">
          <button className="homeButton" onClick={NavigateHome}>
            Home
          </button>
        </div>
      </header>
      <div className="main-cart">
        <div className="cart-items">
          {itemDetails.map((e,index) => {

            return (
              <CartItem
                uid={uid}
                item={e}
                quantity={cart[index]?cart[index].quantity:0}
                cart = {cart}
                setCart={setCart}
                key={e.dishid}
              />
            );
          })}
        </div>
        <div className="cart-price">
          <h1 className="sum">Order Summary</h1>
          <div className="subTotal">
            <p className="sub">Item SubTotal :</p>
            <p className="subAmt">₹{price.reduce((a, b) => a + b, 0)}</p>
          </div>
          <div className="subTotal">
            <p className="sub">Tax : </p>
            <p className="subAmt">₹20.32</p>
          </div>
          <div className="subTotal">
            <p className="sub">Total Amount : </p>
            <p className="subAmt">₹{price.reduce((a, b) => a + b, 0)+20.32}</p>
          </div>
          <button className="checkOut">Place Order</button>
        </div>
      </div>
    </div>
  );
}

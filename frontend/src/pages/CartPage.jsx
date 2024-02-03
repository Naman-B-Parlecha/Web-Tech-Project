import "./CartPage.scss";
import CartItem from "../components/cartItem.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CartPage({ uid, cart, setCart }) {
  const navigator = useNavigate();
  const [price, setPrice] = useState([]);

  console.log(cart);
  function NavigateHome() {
    navigator("/home");
  }
  
  function calculatePrice(totalPrice) {
    setPrice(prev => [...prev, totalPrice]);
  }


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
          {cart.map(e=><CartItem item={e} key={e.dishid} setCart={setCart} cart={cart} uid={uid} calculatePrice={calculatePrice}/>)}
          {/* <CartItem />
          <CartItem />
          <CartItem /> */}
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
            <p className="subAmt">₹{20.32}</p>
          </div>
          <button className="checkOut">Place Order</button>
        </div>
      </div>
    </div>
  );
}

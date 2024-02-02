import "./CartPage.scss";
import CartItem from "../components/cartItem.jsx";
import { useNavigate } from "react-router-dom";
export default function CartPage() {
  const navigator = useNavigate();
  function NavigateHome() {
    navigator("/home");
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
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-price">
          <h1 className="sum">Order Summary</h1>
          <div className="subTotal">
            <p className="sub">Item SubTotal :</p>
            <p className="subAmt">$6.44</p>
          </div>
          <div className="subTotal">
            <p className="sub">Tax : </p>
            <p className="subAmt">$1.32</p>
          </div>
          <div className="subTotal">
            <p className="sub">Total Amount : </p>
            <p className="subAmt">$626</p>
          </div>
          <button className="checkOut">Place Order</button>
        </div>
      </div>
    </div>
  );
}

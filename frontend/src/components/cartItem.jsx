import "./cartItem.scss";
import axios from "axios";

export default function CartItem({ uid, item, setCart,quantity,cart }) {
  

  const removeItem = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.dishid != item.id);
    setCart(updatedCart);
    axios.post(`https://web-tech-project-backend.vercel.app/api/v1/user/${uid}/cart`, {
      cart: updatedCart,
    });
  };
  return (
    <div className="cartItemCont">
      {item ? (
        <>
          <img src={item.img} alt="image" />
          <div className="itemDetails">
            <h1 className="itemName">{item.name}</h1>
            <p className="itemDesp">{item.desp}</p>
            <button className="removeItem" onClick={removeItem}>Remove Item</button>
          </div>
          <div className="details">
            <div className="cartItemPrice">
              <h2 className="totalItemPrice">${item.price}</h2>
            </div>
            <div className="quantityItem">
              <button onClick={() => {}}>-</button>
              <input
                className="input-number"
                type="number"
                value={quantity}
                readOnly
                inputMode="numeric"
              />
              <button onClick={() => {}}>+</button>
            </div>
            <label>quantity</label>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

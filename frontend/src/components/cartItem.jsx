import { useEffect,useState } from "react";
import "./cartItem.scss";
import axios from "axios";

export default function CartItem({uid,item,setCart,cart,calculatePrice}) {
  const [itemDetails,setItemDetails]=useState(null);
  // const getDetails = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/api/v1/dishes/${item.dishid}`);
  //     setItemDetails(response.data);
  //     console.log("Price:"+response.data.price)
  //     calculatePrice(response.data.price*item.quantity);
  //   } catch (error) {
  //     console.error("Error fetching item details:", error);
  //   }
  // };
  const removeItem = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.dishid !== item.dishid);
    setCart(updatedCart);
    axios.post(`http://localhost:3001/api/v1/user/${uid}/cart`, {
      cart: updatedCart, 
    });
  }
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/dishes/${item.dishid}`);
        setItemDetails(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };
    getDetails();
  }, [item.dishid]);

  useEffect(() => {
    if (itemDetails) {
      calculatePrice(itemDetails.price * item.quantity);
    }
  }, [itemDetails, item.quantity, calculatePrice]);

  return (
    <div className="cartItemCont">
      {itemDetails ? (
        <>
          <img src={itemDetails.img} alt="image" />
          <div className="itemDetails">
            <h1 className="itemName">{itemDetails.name}</h1>
            <p className="itemDesp">{itemDetails.desp}</p>
            <button className="removeItem" onClick={removeItem}>Remove Item</button>
          </div>
          <div className="details">
            <div className="cartItemPrice">
              <h2 className="totalItemPrice">${itemDetails.price}</h2>
            </div>
            <div className="quantityItem">
              <button onClick={() => {}}>-</button>
              <input
                className="input-number"
                type="number"
                value={item.quantity}
                onClick={() => {}}
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

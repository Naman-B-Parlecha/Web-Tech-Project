import { useEffect,useState } from "react";
import "./cartItem.scss";
import axios from "axios";

export default function CartItem({item}) {
  const [itemDetails,setItemDetails]=useState(null);
  const getDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/dishes/${item.dishid}`);
      setItemDetails(response.data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };
  useEffect(()=>{
    getDetails();
  }, [item.id])
  return (
    <div className="cartItemCont">
      {itemDetails ? (
        <>
          <img src={itemDetails.img} alt="image" />
          <div className="itemDetails">
            <h1 className="itemName">{itemDetails.name}</h1>
            <p className="itemDesp">{itemDetails.desp}</p>
            <button className="removeItem">Remove Item</button>
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
                value={1}
                onChange={() => {}}
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

import "./cartItem.scss";

import { DUMMY_DATA } from "../DUMMY_DATA.js";
export default function CartItem() {


  return (
    <div className="cartItemCont">
      <img src={DUMMY_DATA[0].img} alt="image" />
      <div className="itemDetails">
        <h1 className="itemName">{DUMMY_DATA[0].name}</h1>
        <p className="itemDesp">{DUMMY_DATA[0].desp}</p>
        <button className="removeItem">Remove Item</button>
      </div>
      <div className="details">
        <div className="cartItemPrice">
            <h2 className="totalItemPrice">${DUMMY_DATA[0].price}</h2>
        </div>
        <div className="quantityItem">
          <button onClick={()=>{}}>-</button>
          <input
            className="input-number"
            type="number"
            value={1}
            onChange={()=>{}}
            inputMode="numeric"
          />  
          <button onClick={()=>{}}>+</button>
        </div>
        <label>quantity</label>
      </div>
    </div>
  );
}

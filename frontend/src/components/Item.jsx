import "./Item.scss";
export default function Item({img,price,name,desp}) {
  return (
    <li>
      <article>
        <img src={img} alt="food image" />
        <h2>{name}</h2>
        <p className={"desp"}>
          {desp}
        </p>
        <span>
          <div className="pricing">
            <p className="title">price</p>
            <p>₹{price}</p>
          </div>
          <div className="quantity">
          <p className="title">quantity</p>
          <input type="number" defaultValue={1} />
          </div>
        </span>
        <button>Add to cart</button>
      </article>
    </li>
  );
}

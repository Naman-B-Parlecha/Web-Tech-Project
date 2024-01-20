import Image from "../assets/pasta.jpg";
import "./Item.scss";
export default function Item() {
  return (
    <li>
      <article>
        <img src={Image} alt="food image" />
        <h2>Pasta</h2>
        <p>
          Delight in a symphony of flavors with al dente pasta bathed in a
          luscious tomato basil sauce, adorned with Parmesan shavings and fresh
          basil leaves.
        </p>
        <span>
          <p>17.99</p>
          <input type="number" defaultValue={1} />
        </span>
          <button>Add to cart</button>
      </article>
    </li>
  );
}

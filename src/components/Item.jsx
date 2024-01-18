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
          <input type="number" defaultValue={1} />
          <button>Add to cart</button>
        </span>
      </article>
    </li>
  );
}

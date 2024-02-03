import Anime from "../assets/anime.mp4";
import Login from "../components/Login";
import "./LoginPage.scss";

export default function LoginPage({setUid,setCartItem}) {
  return (
    <div className={"main"}>
      <div className="box">
        <Login setUid={setUid} setCartItem={setCartItem}/>
      </div>
      <div className="box1">
        <div className="video-overlay"></div>
        <video autoPlay loop muted playsInline>
          <source src={Anime} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

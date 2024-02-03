import { useState } from "react";
import Anime from "../assets/anime.mp4";
import Login from "../components/Login";
import "./LoginPage.scss";
import Modal from "../components/Modal";
// import Modal from "../components/Modal";

export default function LoginPage({ setUid, setCartItem }) {
  const [loginFailed, setLoginFailed] = useState(false);

  function loginFailHandler() {
    setLoginFailed(true);
  }
  function CancelHandler() {
    setLoginFailed(false);
  }
  return (
    <div className={"main"}>
      <div className="box">
        <Login
          setUid={setUid}
          setCartItem={setCartItem}
          loginFailedHandler={loginFailHandler}
        />
      </div>
      <div className="box1">
        <div className="video-overlay"></div>
        <video autoPlay loop muted playsInline>
          <source src={Anime} type="video/mp4" />
        </video>
      </div>
      {loginFailed && <Modal CancelHandler={CancelHandler} />}
    </div>
  );
}

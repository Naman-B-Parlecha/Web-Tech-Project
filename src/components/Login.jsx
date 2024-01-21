import { useRef, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [LoggingIn, setLoggingIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function changeMode() {
    setLoggingIn((prev) => !prev);
  }
  function authentication() {}

  function ChangePage() {
    navigate("/home");
  }
  return (
    <div className="container">
      <h2>Web Tech</h2>
      <p>{LoggingIn ? "Login To Account" : "Create account"}</p>
      <input type="email" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button className="btn-solid" onClick={ChangePage}>
        {LoggingIn ? "Login" : "create account"}
      </button>
      <span>
        <p>
          {LoggingIn ? "Dont " : ""}Have a account?{" "}
          <button onClick={changeMode}>{LoggingIn ? "SignIn" : "Login"}</button>
        </p>
      </span>
    </div>
  );
}

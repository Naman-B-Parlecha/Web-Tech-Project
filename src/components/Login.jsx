import { useRef, useState } from "react";
import "./Login.scss";

export default function Login() {
  const [LoggingIn, setLoggingIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function changeMode() {
    setLoggingIn((prev) => !prev);
  }
  function authentication() {
    // need to implement authentication via firebase //
  }
  return (
    <div className="container">
      <h2>Web Tech</h2>
      <p>{LoggingIn ? "Login To Account" : "Create account"}</p>
      <input type="email" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button className="btn-solid">
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

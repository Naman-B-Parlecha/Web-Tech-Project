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
  // function authentication() {}

  function ChangePage() {
    navigate("/home");
  }
  return (
    <div className="my-container">
      <h2>Web Tech</h2>
      <p>{LoggingIn ? "Welcome Back" : "Create account"}</p>
      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" placeholder="xyz@gmail.com" ref={emailRef} />
      <label htmlFor="pass">Password</label>
      <input id="password" name="password" type="password" placeholder="xyz@123" ref={passwordRef} />
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

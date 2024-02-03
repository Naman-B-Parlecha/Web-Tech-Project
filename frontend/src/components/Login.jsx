import { useRef, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login({setUid,setCartItem,loginFailedHandler}) {
  const navigate = useNavigate();
  const [LoggingIn, setLoggingIn] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function changeMode() {
    setLoggingIn((prev) => !prev);
  }
  async function authentication() {
    if(LoggingIn){
      try{
        const res=await axios.post('http://localhost:3001/api/v1/user/login',
        {
          email: emailRef.current.value,
          pass: passwordRef.current.value,
        }
        )
        console.log(res.data);
        setUid(res.data._id);
        setCartItem(res.data.cart);
        navigate("/home");
      }catch(e){
        if(e.response.data.message==="User not found"){
          // alert("Wrong credentials");
          loginFailedHandler();
        }
        return e;
      }
    }else{
      try{
        const res=await axios.post("http://localhost:3001/api/v1/user/register", {
            email: emailRef.current.value,
            pass: passwordRef.current.value,
          })
        setUid(res.data._id);
        navigate("/home");
        }catch(e){
          console.log(e);
        }
    }
  }

  return (
    <div className="my-container">
      <h2>Web Tech</h2>
      <p>{LoggingIn ? "Welcome Back" : "Create account"}</p>
      <label htmlFor="email">Email Address</label>
      <input id="email" name="email" type="email" placeholder="xyz@gmail.com" ref={emailRef} />
      <label htmlFor="pass">Password</label>
      <input id="password" name="password" type="password" placeholder="xyz@123" ref={passwordRef} />
      <button className="btn-solid" onClick={authentication}>
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { useState } from "react";

function App() {
  const [uid,setUid] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage setUid={setUid} setCartItem={setCartItem}/> },
    { path: "/home", element: <HomePage uid={uid} cartItem={cartItem} setCartItem={setCartItem}/> },
    { path: "/cart", element: <CartPage cart={cartItem} setCart={setCartItem} uid={uid}/> },
  ]);
  return (
    <div className="AppHome">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

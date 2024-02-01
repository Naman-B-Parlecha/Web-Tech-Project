import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CartPage from "./pages/CartPage.jsx";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/cart", element: <CartPage /> },
  ]);
  return (
    <div className="AppHome">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

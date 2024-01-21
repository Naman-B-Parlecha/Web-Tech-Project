import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./app.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/home", element: <HomePage /> },
  ]);
  return (
    <div className="Home">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

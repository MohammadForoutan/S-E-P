import { Link, createBrowserRouter } from "react-router-dom";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth/login",
        element: <Login />
    },
    {
        path: "*",
        element: <Link to={'/'}>Back Home - 404</Link>
    }
])
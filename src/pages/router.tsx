import { Link, createBrowserRouter } from "react-router-dom";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";
import { NotFound } from "./NotFound/NotFound";
import { Register } from "./Register/Register";
import { Dashboard } from "./Dashboard/Dashboard";
import { DashSetting } from "./DashSetting/DashSetting";

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
        path: "/auth/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/dashboard/setting",
        element: <DashSetting />
    },
    {
        path: "*",
        element: <NotFound />
    }
])
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";
import { NotFound } from "./NotFound/NotFound";
import { Register } from "./Register/Register";
import { Dashboard } from "./Dashboard/Dashboard";
import { DashSetting } from "./DashSetting/DashSetting";
import { DashNotification } from "./DashNotification/DashNotification";
import { DashSupport } from "./DashSupoort/DashSupport";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/auth",
		children: [{
			path: "login",
			element: <Login />
		},
		{
			path: "register",
			element: <Register />
		}]
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "setting",
				element: <DashSetting />
			},
			{
				path: "notifications",
				element: <DashNotification />
			},
			{
				path: "support",
				element: <DashSupport />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
]);

import { createBrowserRouter, redirect } from "react-router-dom";
import { Login } from "./Login/Login";
import { Home } from "./Home/Home";
import { NotFound } from "./NotFound/NotFound";
import { Register } from "./Register/Register";
import { Dashboard } from "./Dashboard/Dashboard";
import { DashSetting } from "./DashSetting/DashSetting";
import { DashNotification } from "./DashNotification/DashNotification";
import { DashSupport } from "./DashSupoort/DashSupport";
import DashSupportForm from "../components/Forms/DashSupport/DashSupportForm";
import { DashDiscussion } from "./DashDiscussion/DashDiscussion";
import { DashUser } from "./DashUser/DashUser";
import { useUserStore } from "../stores";

function loginLoader() {
  const isAuth = useUserStore.getState().isAuthenticated;

  if (isAuth === true) {
    return redirect("/");
  }
  return null;
}

function authLoader() {
  const isAuth = useUserStore.getState().isAuthenticated;

  if (isAuth !== true) {
    return redirect("/auth/login");
  }
  return null;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        loader: loginLoader,
        element: <Login />,
      },
      {
        path: "register",
        loader: loginLoader,
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: authLoader,
    children: [
      {
        path: "user",
        element: <DashUser />,
      },
      {
        path: "setting",
        element: <DashSetting />,
      },
      {
        path: "notifications",
        element: <DashNotification />,
      },
      {
        path: "support",
        element: <DashSupport />,
      },
      {
        path: "support/create",
        element: <DashSupportForm />,
      },
      {
        path: "support/discussion/:id",
        element: <DashDiscussion />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

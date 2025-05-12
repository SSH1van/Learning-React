import { Route, Routes } from "react-router";
import MainPage from "../pages/main-page";
import MyProfile from "../pages/my-profile";
import Settings from "../pages/settings";
import Orders from "../pages/orders";
import Delivery from "../pages/delivery";
import Login from "../pages/login";
import NoMatchPage from "../pages/no-match-page";
import PrivateRoute from "./private.route";

export default function AppRoutes() {
  const navigationRoutes = [
    { path: "/", element: <MainPage /> },
    { path: "/my-profile/:userId", element: <MyProfile /> },
    {
      path: "/settings",
      element: (
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      ),
    },
    { path: "/orders", element: <Orders /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NoMatchPage /> },
  ];
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

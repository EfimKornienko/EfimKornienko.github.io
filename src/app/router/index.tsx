import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { RootPage } from "../root/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/leaderboard",
        element: <h1>leaderboard</h1>,
      },
      {
        path: "/invite",
        element: <h1>invite</h1>,
      },
      {
        path: "/tasks",
        element: <h1>tasks</h1>,
      },
    ],
  },
]);

export { router };

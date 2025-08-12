import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../layouts/PortfolioLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },


    ],
  },

]);

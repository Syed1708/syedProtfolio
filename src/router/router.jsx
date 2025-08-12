import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../layouts/PortfolioLayout";


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


    ],
  },

]);

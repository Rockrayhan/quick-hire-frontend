import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import JobDetails from "@/pages/JobDetails";
import { createBrowserRouter } from "react-router";

export const AppRoutes = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "job/:id",
        Component: JobDetails,
      },
    ],
  },
]);

import App from "@/App";
import AdminLayout from "@/components/admin/AdminLayout";

import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageJobsPage from "@/pages/admin/ManageJobsPage";

import AllJobs from "@/pages/AllJobs";
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
        path: "all-jobs",
        Component: AllJobs,
      },
      {
        path: "job/:id",
        Component: JobDetails,
      },

      /* =====================
         ADMIN ROUTES
      ====================== */
      {
        path: "admin",
        Component: AdminLayout, 
        children: [
          {
            path: "dashboard",
            Component: AdminDashboard,
          },
          {
            path: "manage-jobs",
            Component: ManageJobsPage,
          },
        ],
      },
    ],
  },
]);
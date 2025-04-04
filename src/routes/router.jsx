import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "../layouts/dashboard-layout";
import Dashboard from "../pages/dashboard";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Navigate to='/dashboard'/>
    },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

import { RouteObject, createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AdminRoutes from "./AdminRoutes";
import PublicRoute from "../components/RouteComponents/PublicRoute";
import PrivateRoute from "../components/RouteComponents/PrivateRoute";
import SingleBook from "../Pages/Books/Single Book/SingleBook";
import DashboardLayout from "../components/Layout/DashboardLayout";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import AllBooks from "../Pages/Books/All Books/AllBooks";
import CheckoutPage from "../Pages/CheckOut/CheckOut";
import OrderConfirmation from "../Pages/OrderConfirmation/OrderConfirmation";
import UserDashboard from "../Pages/User/UserDashboard";
import About from "../Pages/About/About";
import NotFoundPage from "../components/404/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "books/:id",
        element: <SingleBook />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "order-confirmation",
        element: (
          <PrivateRoute>
            <OrderConfirmation />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: AdminRoutes as RouteObject[],
  },

  {
    path: "user",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);

export default router;

import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AddBookToStore from "../Pages/Admin/AddBookToStore";
import { TRoutes } from "../Types/global";
import PrivateRoute from "../components/RouteComponents/PrivateRoute";
import UpdateBook from "../Pages/Admin/UpdateBook";

const AdminRoutes: TRoutes[] = [
  {
    index: true,
    name: "Dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard",
    name: "Dashboard",
    element: (
      <PrivateRoute>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
  {
    element: (
      <PrivateRoute>
        <AddBookToStore />
      </PrivateRoute>
    ),
    path: "add-book",
    name: "Add New Book",
  },
  {
    element: (
      <PrivateRoute>
        <UpdateBook />
      </PrivateRoute>
    ),
    path: "update-book/:id",
  },
];

export default AdminRoutes;

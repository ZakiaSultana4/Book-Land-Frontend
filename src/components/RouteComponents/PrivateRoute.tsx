import React from "react";
import { useAppSelector } from "../../Redux/hook";
import { getUser } from "../../Redux/Features/Auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const user = useAppSelector(getUser);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  return isLogin ? <Outlet /> : <Navigate to="/" />;
};

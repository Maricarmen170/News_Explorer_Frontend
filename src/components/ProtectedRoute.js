import React from "react";
import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const ProtectedRoute = ({ path, component: Component, ...props }) => {
  const { isLoggedIn } = useUserContext();

  return isLoggedIn ? (
    <Component isLoggedIn={isLoggedIn} {...props} />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoute;

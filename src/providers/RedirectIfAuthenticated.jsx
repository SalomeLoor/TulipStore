import React from 'react'
import { Navigate } from "react-router-dom";
//privider de autenticacion
import { useAuth } from "../providers/AuthProvider";



const RedirectIfAuthenticated = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/user" />;
  }

  return children;
};

export default RedirectIfAuthenticated;

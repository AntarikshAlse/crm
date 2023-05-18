import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? (
    <>
      <Navbar />
      <div className="container mx-6">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;

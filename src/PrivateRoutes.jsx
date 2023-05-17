import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);
  const admin = currentUser?.isAdmin;
  return admin ? (
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

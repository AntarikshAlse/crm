import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Clients from "./pages/Clients";
import { useSelector } from "react-redux";
function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route
              path="/clients"
              element={
                currentUser?.isAdmin ? <Clients /> : <h1>Unauthorized</h1>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

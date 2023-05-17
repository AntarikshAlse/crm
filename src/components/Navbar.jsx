import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">CRM Tool</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate("/")}>Dashboard</a>
          </li>
          <li>
            <a onClick={() => navigate("/tickets")}>Tickets</a>
          </li>
          {currentUser?.isAdmin ? (
            <li>
              <a onClick={() => navigate("/clients")}>Clients</a>
            </li>
          ) : null}
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useVendor from "../../hooks/useVendor";
import React from "react";
import toast from "react-hot-toast";
import logo from "../../assets/images/common/nex-trend.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [isUserAdmin] = useAdmin(user?.email);
  const [isVendor] = useVendor(user?.email);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      
      
      {user && (
       
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
    
      )}

      {(isUserAdmin || isVendor) && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {user ? (
        <li>
          <button
            onClick={async () => {
              const success = await signOut();
              if (success) {
                toast("You are sign out");
                localStorage.removeItem("accessToken");
              }
            }}
          >
            Sign Out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-[#FF8C2E] h-1/2 ">
      <div className="navbar-start ">
        <div className="dropdown max-w-[1100px]">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <h3
          title="home"
          className="navbar-center font-extrabold  text-white font-serif"
        >
          <Link to="/" className="  ">
            <div className="flex items-center">
              <img src={logo} className="w-10 mx-auto" alt="" />{" "}
              <span className="text-xl ml-6 text-white">Nex Trend</span>
            </div>
          </Link>
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex max-w-[1100px] mx-auto">
        <ul className="menu menu-horizontal px-1 text-yellow-600 font-semibold">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

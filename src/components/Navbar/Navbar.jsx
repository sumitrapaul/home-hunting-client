import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navLinks = (
    <>
      <li className="lg:text-2xl font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="lg:text-2xl font-bold">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-cyan-300 to bg-indigo-700">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="w-16 h-16"
            src="https://i.ibb.co/RD1SJSJ/download-removebg-preview-1.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

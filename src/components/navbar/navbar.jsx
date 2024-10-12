import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="wrapper">
      <div className="header">
        <h2>NIT Raipur - An IEEE Conference, India</h2>
        <h3>Authors Portal</h3>
      </div>
      <div className="nav-items">
        <div className="navbar-left">
          <button>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </button>
        </div>
        <div className="navbar-right">
          <button>
            <Link to="/login">Sign in</Link>
          </button>
          <button>
            <Link to="/register">Sign up</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

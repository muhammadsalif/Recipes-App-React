import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Food2Fork" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5 ">
        <ul className="navbar-nav ">
          <li className="navbar-item ">
            <Link
              className="navbar-link font-weight-bold text-decoration-none"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="navbar-item ml-sm-5">
            <Link
              className="navbar-link  font-weight-bold text-decoration-none"
              to="/recipes"
            >
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

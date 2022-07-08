import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className=" container-fluid">
          <h1 className=" px-4 ">Paradise Hotel</h1>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i
                class="fas fa-bars"
                style={{ color: "black", fontSize: "28px" }}
              ></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    color: "maroon",
                  }}
                >
                  <h5> Home </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/booking"
                  style={{
                    textDecoration: "none",
                    color: "maroon",
                  }}
                >
                  <h5> Booking </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "maroon",
                  }}
                >
                  <h5> Dashboard </h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "maroon",
                  }}
                >
                  <h5> Logout </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

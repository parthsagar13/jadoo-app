import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid  " style={{ marginTop: "8px" }}>
          <div
            className="text-light"
            style={{ margin: "-0px 18px", marginTop: "-26px" }}
          >
            <div>
              <img
                style={{
                  width: "112px",
                  height: "56px",
                  margiTop: "-11px",
                }}
                src={Logo}
                alt="logo"
              />
            </div>
              <div style={{margin: '0 7px',marginTop: '-9px'}}>
                <Link className="navbar-brand fw-bold fs-6" to="/general">
                  Newsmonkey
                </Link>
              </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ marginBottom: "-16px" }}
                  aria-current="page"
                  to="/general"
                >
                  Home
                </Link>
                x
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

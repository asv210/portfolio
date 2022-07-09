import React from "react";
import { NavLink } from "react-router-dom";
import pho from "../Components/images/toon.jpg";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  ">
      <div className="container-fluid">
        <NavLink className="navbar-brand mx-3" to="/">
          <img
            src={pho}
            width="36"
            height="36"
            alt=""
            style={{ borderRadius: "20px", margin: "0" }}
            srcset=""
          />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item mx-3 ">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/aboutme" className="nav-link">
                About Me
              </NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/skills" className="nav-link">
                Education
              </NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/achievements" className="nav-link">
                Achievements
              </NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink to="/contactme" className="nav-link">
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

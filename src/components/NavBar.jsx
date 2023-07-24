import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav id="navbar" class="navbar navbar-expand-md position-fixed navbar-dark">
      <a href="#" class="navbar-brand">
        <h3 class="mb-0">
          <strong>EVEN</strong>TECH
        </h3>
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#mainNavBar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavBar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            {/* <a href="#showcase" class="nav-link">
              Home
            </a> */}
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <a href="#feeds" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#explore" class="nav-link">
              Explore
            </a>
          </li>
          <li class="nav-item">
            <a href="#newsletter" class="nav-link">
              Contact
            </a>
          </li>
          <li class="nav-item">
            {/* <a href="#" class="nav-link">
              Join
            </a> */}
            <NavLink to="/join" className={"nav-link"}>
              Join
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
